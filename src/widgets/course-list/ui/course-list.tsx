'use client'

import { CourseCard, type Course } from '@/entities/course'

interface CourseListProps {
  courses: Course[]
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
      {/* Course grid */}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6'>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Empty state */}
      {courses.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-500'>강의가 없습니다.</p>
        </div>
      )}
    </div>
  )
}
