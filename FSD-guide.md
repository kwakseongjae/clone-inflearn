# FSD (Feature-Sliced Design) 아키텍처 가이드

## FSD 아키텍처란?

FSD는 프론트엔드 애플리케이션을 구조화하는 방법론으로, 코드를 기능별로 분리하고 명확한 계층 구조를 통해 확장성과 유지보수성을 높입니다.

## 핵심 원칙

1. **레이어 기반 구조**: 애플리케이션을 수직적 레이어로 분리
2. **슬라이스 단위 분할**: 각 레이어를 기능별 슬라이스로 분할
3. **Public API**: 각 슬라이스는 명시적인 public API만 노출
4. **단방향 의존성**: 상위 레이어는 하위 레이어만 의존

## 레이어 구조

```
src/
├── app/              # 애플리케이션 레이어
├── pages/            # 페이지 레이어
├── widgets/          # 위젯 레이어
├── features/         # 기능 레이어
├── entities/         # 엔티티 레이어
└── shared/           # 공유 레이어
```

### 1. **app/** - 애플리케이션 레이어

- 전역 설정, 프로바이더, 라우터 설정
- 애플리케이션 초기화 로직
- 예: `app/providers/`, `app/styles/`

### 2. **pages/** - 페이지 레이어

- 라우트별 페이지 컴포넌트
- 페이지별 레이아웃과 구성
- 예: `pages/home/`, `pages/course-detail/`

### 3. **widgets/** - 위젯 레이어

- 독립적인 UI 블록 (여러 features 조합)
- 비즈니스 로직을 포함한 큰 단위 컴포넌트
- 예: `widgets/header/`, `widgets/course-list/`

### 4. **features/** - 기능 레이어

- 사용자가 수행할 수 있는 액션/기능
- 비즈니스 로직과 UI가 결합된 기능 단위
- 예: `features/filter-courses/`, `features/add-to-cart/`

### 5. **entities/** - 엔티티 레이어

- 비즈니스 엔티티와 관련 로직
- 도메인 모델과 UI 표현
- 예: `entities/course/`, `entities/user/`

### 6. **shared/** - 공유 레이어

- 재사용 가능한 컴포넌트, 유틸, 타입
- 특정 비즈니스 로직이 없는 순수 요소
- 예: `shared/ui/`, `shared/lib/`, `shared/api/`

## 리팩토링 계획

### 현재 구조를 FSD로 변환:

```
src/
├── app/
│   ├── providers/
│   │   └── index.tsx         # NavigationProvider 등
│   └── layouts/
│       └── root-layout.tsx
│
├── pages/
│   ├── home/
│   │   ├── ui/
│   │   │   └── HomePage.tsx
│   │   └── index.ts
│   └── course-detail/
│       ├── ui/
│       │   └── CourseDetailPage.tsx
│       └── index.ts
│
├── widgets/
│   ├── header/
│   │   ├── ui/
│   │   │   ├── TopNavbar.tsx
│   │   │   └── MobileNavbar.tsx
│   │   ├── model/
│   │   │   └── navigation.ts
│   │   └── index.ts
│   │
│   ├── bottom-navigation/
│   │   ├── ui/
│   │   │   └── BottomNavbar.tsx
│   │   └── index.ts
│   │
│   └── course-catalog/
│       ├── ui/
│       │   └── CourseCatalog.tsx
│       └── index.ts
│
├── features/
│   ├── filter-courses/
│   │   ├── ui/
│   │   │   └── CourseFilter.tsx
│   │   ├── model/
│   │   │   ├── types.ts
│   │   │   └── use-filters.ts
│   │   ├── lib/
│   │   │   └── filter-utils.ts
│   │   └── index.ts
│   │
│   └── toggle-wishlist/
│       ├── ui/
│       │   └── WishlistButton.tsx
│       ├── model/
│       │   └── use-wishlist.ts
│       └── index.ts
│
├── entities/
│   ├── course/
│   │   ├── ui/
│   │   │   ├── CourseCard.tsx
│   │   │   └── CourseList.tsx
│   │   ├── model/
│   │   │   ├── types.ts
│   │   │   └── api.ts
│   │   └── index.ts
│   │
│   └── user/
│       ├── model/
│       │   └── types.ts
│       └── index.ts
│
└── shared/
    ├── ui/
    │   ├── button/
    │   ├── input/
    │   └── layout/
    ├── lib/
    │   ├── hooks/
    │   └── utils/
    ├── api/
    │   └── base.ts
    └── config/
        └── constants.ts
```

## 각 슬라이스의 Public API

각 슬라이스는 `index.ts`를 통해 명시적으로 export:

```typescript
// entities/course/index.ts
export { CourseCard, CourseList } from './ui'
export type { Course, CourseFilter } from './model/types'
export { fetchCourses } from './model/api'
```

## 임포트 규칙

```typescript
// ✅ 올바른 임포트
import { CourseCard } from '@/entities/course'
import { useFilters } from '@/features/filter-courses'

// ❌ 잘못된 임포트 (내부 구조 직접 참조)
import CourseCard from '@/entities/course/ui/CourseCard'
```

## 장점

1. **명확한 책임 분리**: 각 레이어와 슬라이스의 역할이 명확
2. **확장성**: 새 기능 추가 시 영향 범위가 제한적
3. **재사용성**: shared와 entities의 재사용 가능
4. **유지보수성**: 코드 위치를 쉽게 찾을 수 있음
5. **팀 협업**: 기능별로 독립적인 작업 가능
