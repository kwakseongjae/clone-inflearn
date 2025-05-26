import { CourseList } from '@/widgets/course-list'
import { CourseFilter } from '@/features/filter-courses'
import { mockCourses } from '@/entities/course'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-green-50 to-blue-50 py-12 lg:py-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            나의 성장을 도와줄 IT 실무 강의
          </h1>
          <p className='text-lg text-gray-600'>
            인프런에서 나에게 맞는 강의를 찾아보세요
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <Suspense
        fallback={
          <div className='h-16 bg-white border-b border-gray-200 animate-pulse' />
        }
      >
        <CourseFilter />
      </Suspense>

      {/* Course List Section */}
      <section className='min-h-screen'>
        <CourseList courses={mockCourses} />
      </section>
    </main>
  )
}
