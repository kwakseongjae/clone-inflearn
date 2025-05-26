import { mockCourses } from '@/entities/course'
import { notFound } from 'next/navigation'
import { createSlug } from '@/shared/lib/slug'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CoursePage({ params }: PageProps) {
  // Next.js 15에서 params는 Promise이므로 await 필요
  const { slug } = await params

  // URL에서 슬러그를 디코딩
  const decodedSlug = decodeURIComponent(slug)

  // 슬러그로 강의 찾기
  const course = mockCourses.find(c => createSlug(c.title) === decodedSlug)

  if (!course) {
    notFound()
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* 임시 상세 페이지 */}
        <h1 className='text-3xl font-bold mb-4'>{course.title}</h1>
        <p className='text-xl text-gray-600 mb-2'>강사: {course.instructor}</p>
        <p className='text-2xl font-bold text-green-600'>
          ₩{course.price.toLocaleString()}
        </p>

        <div className='mt-8 bg-white rounded-lg p-6 shadow'>
          <h2 className='text-xl font-semibold mb-4'>강의 정보</h2>
          <div className='space-y-2'>
            <p>
              평점: ⭐ {course.rating} ({course.reviewCount}개의 리뷰)
            </p>
            <p>수강생: {course.studentCount.toLocaleString()}명</p>
            <p>태그: {course.tags.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// 정적 경로 생성 (옵션)
export async function generateStaticParams() {
  return mockCourses.map(course => ({
    slug: encodeURIComponent(createSlug(course.title)),
  }))
}
