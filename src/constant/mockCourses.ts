// app/data/mockCourses.ts
export interface Course {
  id: string
  title: string
  instructor: string
  thumbnail: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  studentCount: number
  tags: string[]
  isNew?: boolean
  isUpdated?: boolean
  isFree?: boolean
  discountRate?: number
  description: string
  learningPoints: string[]
  lastUpdated: string
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Jenkins를 이용한 CI/CD Pipeline 구축',
    instructor: 'Dowon Lee',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/329275/cover/5173e069-8ce9-45e8-905a-f0f5f345899c/329275-b-eng.png?w=420',
    price: 88000,
    rating: 4.7,
    reviewCount: 180,
    studentCount: 4300,
    tags: ['Jenkins', 'CI/CD', 'DevOps'],
    isUpdated: true,
    description:
      'Jenkins를 활용한 지속적 통합/배포 파이프라인 구축 방법을 실습을 통해 학습합니다.',
    learningPoints: [
      'Jenkins 설치 및 기본 설정',
      'Git과 Jenkins 연동',
      'Docker를 활용한 빌드 환경 구성',
      'AWS 배포 자동화',
    ],
    lastUpdated: '2025.05.15',
  },
  {
    id: '2',
    title: '차이를 만드는 AWS 클라우드 보안 첫걸음',
    instructor: 'SKm&service',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/331542/cover/37ea81db-4dd8-440a-85f3-3415658562d2/331542-eng.png?w=420',
    price: 82500,
    originalPrice: 110000,
    discountRate: 25,
    rating: 4.5,
    reviewCount: 4,
    studentCount: 100,
    tags: ['AWS', 'Cloud', 'Security'],
    isUpdated: true,
    description:
      'AWS 클라우드 환경에서의 보안 모범 사례와 실무 적용 방법을 학습합니다.',
    learningPoints: [
      'IAM 정책 설계 및 구현',
      'VPC 보안 구성',
      'AWS 보안 서비스 활용',
      '보안 모니터링 및 대응',
    ],
    lastUpdated: '2025.04.20',
  },
  {
    id: '3',
    title: '개발자를 위한 쉬운 도커',
    instructor: '데브위키',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/332726/cover/b0615cb4-9620-4448-b7b3-6d0b00ee204a/332726.png?w=420',
    price: 88000,
    rating: 5.0,
    reviewCount: 154,
    studentCount: 2100,
    tags: ['Docker', 'Container', 'DevOps'],
    isUpdated: true,
    description:
      '도커의 기본 개념부터 실무 활용까지 단계별로 쉽게 학습할 수 있습니다.',
    learningPoints: [
      'Docker 기본 개념 이해',
      'Dockerfile 작성법',
      'Docker Compose 활용',
      '컨테이너 오케스트레이션 기초',
    ],
    lastUpdated: '2025.05.10',
  },
  {
    id: '4',
    title: 'Spring Cloud로 개발하는 마이크로서비스 애플리케이션(MSA)',
    instructor: 'Dowon Lee',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/326544/cover/02f637a6-7369-4ab0-b638-3eccd9c339db/326544-eng.png?w=420',
    price: 88000,
    rating: 4.9,
    reviewCount: 413,
    studentCount: 7400,
    tags: ['Spring Cloud', 'MSA', 'Microservice'],
    isUpdated: true,
    description:
      'Spring Cloud를 활용한 마이크로서비스 아키텍처 설계 및 구현 방법을 학습합니다.',
    learningPoints: [
      'MSA 아키텍처 이해',
      'Spring Cloud Config',
      'Service Discovery',
      'API Gateway 구현',
    ],
    lastUpdated: '2025.05.13',
  },
  {
    id: '5',
    title: '도커 컨테이너 인프라 이해와 해킹/보안',
    instructor: '보안프로젝트',
    thumbnail:
      'https://cdn.inflearn.com/public/files/courses/336700/cover/01jqmztfc6amn93cyk9tw0xed8?w=420',
    price: 77000,
    rating: 0,
    reviewCount: 0,
    studentCount: 0,
    tags: ['Docker', 'Security', 'Infrastructure'],
    isUpdated: true,
    description:
      '도커 컨테이너 환경의 보안 취약점과 방어 기법을 실습을 통해 학습합니다.',
    learningPoints: [
      '컨테이너 보안 기초',
      '도커 보안 설정',
      '컨테이너 취약점 분석',
      '보안 모범 사례',
    ],
    lastUpdated: '2025.05.20',
  },
  {
    id: '6',
    title: '아키텍처와 함께하는 GCP (Google Cloud Platform)',
    instructor: '조길',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/335938/cover/5a75fe10-e3fa-4b9f-9414-bf30f1f04d87/335938.jpg?w=420',
    price: 64900,
    rating: 5.0,
    reviewCount: 4,
    studentCount: 0,
    tags: ['GCP', 'Cloud', 'Architecture'],
    isUpdated: true,
    description:
      'GCP의 핵심 서비스와 아키텍처 설계 패턴을 실습을 통해 학습합니다.',
    learningPoints: [
      'GCP 핵심 서비스 이해',
      '클라우드 아키텍처 설계',
      'Compute Engine 활용',
      'Cloud Storage 및 Database',
    ],
    lastUpdated: '2025.05.18',
  },
  {
    id: '7',
    title: '실리콘밸리 엔지니어와 함께하는 AWS 네트워크',
    instructor: 'CloudSecurityLab',
    thumbnail:
      'https://cdn.inflearn.com/public/files/courses/336400/cover/01jp9fnzkvcfykgpc7hnf7kwh2?w=420',
    price: 44000,
    rating: 5.0,
    reviewCount: 1,
    studentCount: 0,
    tags: ['AWS', 'Network', 'Cloud'],
    isUpdated: true,
    description:
      '실무에서 바로 적용 가능한 AWS 네트워크 설계 및 구축 방법을 학습합니다.',
    learningPoints: [
      'VPC 설계 및 구축',
      '서브넷 및 라우팅',
      '보안 그룹과 NACL',
      'VPN 및 Direct Connect',
    ],
    lastUpdated: '2025.05.12',
  },
  {
    id: '8',
    title: '정보보호논문검정(TOLIS) 자격증 대비',
    instructor: '디액업',
    thumbnail:
      'https://cdn.inflearn.com/public/files/courses/335790/cover/01jq6vsstqwgxh9jyqev36aery?w=420',
    price: 143000,
    rating: 0,
    reviewCount: 0,
    studentCount: 0,
    tags: ['Security', 'Certification', 'TOLIS'],
    isUpdated: true,
    description:
      'TOLIS 자격증 취득을 위한 체계적인 학습 커리큘럼을 제공합니다.',
    learningPoints: [
      '정보보호 이론',
      '보안 정책 및 관리',
      '기술적 보안 대책',
      '실전 문제 풀이',
    ],
    lastUpdated: '2025.05.25',
  },
  {
    id: '9',
    title: 'MySQL Geospatial Query를 통한 위치 합치와 AWS를 활용한 이미지 개선',
    instructor: 'July',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/334141/cover/6de96458-f99f-4864-808d-7cb47b4495fa/334141.jpg?w=420',
    price: 44000,
    rating: 5.0,
    reviewCount: 3,
    studentCount: 0,
    tags: ['MySQL', 'AWS', 'Geospatial'],
    isUpdated: true,
    description:
      'MySQL의 공간 데이터 처리와 AWS를 활용한 이미지 처리 기법을 학습합니다.',
    learningPoints: [
      'Geospatial 데이터 이해',
      'MySQL 공간 쿼리',
      'AWS S3 이미지 저장',
      'Lambda를 활용한 이미지 처리',
    ],
    lastUpdated: '2025.05.22',
  },
  {
    id: '10',
    title:
      'AI, 나도 AI 서비스 만들 수 있어. [이미지 AI 서비스 서버리스 풀스택]',
    instructor: '배움점',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/332631/cover/a26f023a-9115-4560-983c-5a2b9bd57804/332631.png?w=420',
    price: 128700,
    rating: 5.0,
    reviewCount: 4,
    studentCount: 100,
    tags: ['AI', 'Serverless', 'Full Stack'],
    isUpdated: true,
    description:
      '서버리스 아키텍처로 AI 이미지 처리 서비스를 구축하는 방법을 학습합니다.',
    learningPoints: [
      'AI 서비스 기초',
      '서버리스 아키텍처',
      'AWS Lambda 활용',
      'AI API 통합',
    ],
    lastUpdated: '2025.05.24',
  },
  {
    id: '11',
    title: 'AWS 클라우드 이해와 실습',
    instructor: '기술노트with알렉',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/331534/cover/c53a2e6e-af79-49f3-943a-bb652e1b6ae8/Cloud Service.png?w=420',
    price: 49500,
    rating: 4.8,
    reviewCount: 9,
    studentCount: 200,
    tags: ['AWS', 'Cloud', 'Beginner'],
    isUpdated: true,
    description: 'AWS 클라우드의 기초부터 실무 활용까지 체계적으로 학습합니다.',
    learningPoints: [
      'AWS 기본 개념',
      'EC2 인스턴스 관리',
      'S3 스토리지 활용',
      'RDS 데이터베이스',
    ],
    lastUpdated: '2025.05.14',
  },
  {
    id: '12',
    title: '[기본]테라폼 개요와 기본 문법',
    instructor: 'cloudsecuritylab',
    thumbnail:
      'https://cdn.inflearn.com/public/files/courses/336554/cover/01jnwf01p9q62zvjhbstphnefb?w=420',
    price: 66000,
    rating: 5.0,
    reviewCount: 3,
    studentCount: 0,
    tags: ['Terraform', 'IaC', 'AWS'],
    isUpdated: true,
    description:
      '인프라를 코드로 관리하는 테라폼의 기본 개념과 실습을 진행합니다.',
    learningPoints: [
      'IaC 개념 이해',
      'Terraform 기본 문법',
      'AWS 리소스 생성',
      '상태 관리 및 모듈화',
    ],
    lastUpdated: '2025.05.16',
  },
  {
    id: '13',
    title: 'AWS SAA-C03 자격증 대비-핵심 정리',
    instructor: '쌤즈(SSAMZ)',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/333435/cover/51a9cebe-be3c-44bc-b202-8dd3f8f1dff6/333435.jpg?w=420',
    price: 66000,
    rating: 5.0,
    reviewCount: 8,
    studentCount: 100,
    tags: ['AWS', 'Certification', 'SAA-C03'],
    isUpdated: true,
    description:
      'AWS SAA-C03 자격증 시험을 위한 핵심 내용을 정리하고 실전 문제를 풀어봅니다.',
    learningPoints: [
      'AWS 서비스 핵심 정리',
      '시험 출제 경향 분석',
      '실전 문제 풀이',
      '시험 팁 및 전략',
    ],
    lastUpdated: '2025.05.21',
  },
  {
    id: '14',
    title: '네이버클라우드 보안 아키텍처 및 비용',
    instructor: '지금 당장',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/331588/cover/eadfff29-7eac-4dcd-9f75-5954ba0c8109/네이버클라우드0714.png?w=420',
    price: 33000,
    rating: 4.5,
    reviewCount: 6,
    studentCount: 0,
    tags: ['Naver Cloud', 'Security', 'Architecture'],
    isUpdated: true,
    description:
      '네이버 클라우드 플랫폼의 보안 아키텍처 설계와 비용 최적화 방법을 학습합니다.',
    learningPoints: [
      'NCP 보안 서비스',
      '네트워크 보안 설계',
      '비용 최적화 전략',
      '모니터링 및 관리',
    ],
    lastUpdated: '2025.05.19',
  },
  {
    id: '15',
    title: '누구나 쉽게 이해하는 4차 산업혁명 ICBM기술',
    instructor: '조슈아',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/333383/cover/37b4442d-be8e-4248-b23e-6e5e8f5d8825/333383.png?w=420',
    price: 88000,
    rating: 4.5,
    reviewCount: 2,
    studentCount: 0,
    tags: ['Industry 4.0', 'ICBM', 'Technology'],
    description:
      'IoT, Cloud, Big Data, Mobile의 핵심 개념과 활용 사례를 쉽게 학습합니다.',
    learningPoints: [
      'ICBM 기술 개요',
      'IoT 활용 사례',
      '빅데이터 분석 기초',
      '클라우드 컴퓨팅 이해',
    ],
    lastUpdated: '2025.05.17',
  },
  {
    id: '16',
    title: '코딩 없이 AI 자동화 전문가가 되는 법, n8n 완벽 가이드',
    instructor: '남박사',
    thumbnail:
      'https://cdn.inflearn.com/public/courses/333383/cover/37b4442d-be8e-4248-b23e-6e5e8f5d8825/333383.png?w=420',
    price: 20460,
    originalPrice: 68200,
    discountRate: 70,
    rating: 5.0,
    reviewCount: 22,
    studentCount: 600,
    tags: ['AI', 'Automation', 'n8n', 'No-Code'],
    isNew: true,
    description:
      '요즘도 직접 코딩하시나요? 이젠 바이브 코딩도 퀴쏘은 시대! 코딩 없이 n8n으로 AI 자동화 전문가가 되어보세요. 실무에 바로 적용 가능한 자동화 워크플로우 설계 가능합니다.',
    learningPoints: [
      'AI Agent 제작',
      'AI 자동화 실무',
      'N8N 자동화 툴',
      'AI 프롬프트 엔지니어링',
    ],
    lastUpdated: '2025.05.26',
  },
]
