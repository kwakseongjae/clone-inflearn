'use client'

import Link from 'next/link'
import Image from 'next/image'
import { StarIcon, CheckIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useState } from 'react'
import type { Course } from '@/entities/course'
import { createSlug } from '@/shared/lib/slug'
import { formatPrice, formatStudentCount } from '@/entities/course'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // URL 슬러그 생성
  const courseSlug = createSlug(course.title)
  const courseUrl = `/course/${encodeURIComponent(courseSlug)}`

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={courseUrl} className='block'>
        <div className='relative overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-lg'>
          {/* Thumbnail */}
          <div className='relative aspect-[16/9] overflow-hidden bg-gray-200'>
            {!imageLoaded && (
              <div className='absolute inset-0 animate-pulse bg-gray-300' />
            )}
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className={clsx(
                'object-cover transition-transform duration-300',
                isHovered && 'scale-110',
                imageLoaded ? 'opacity-100' : 'opacity-0'
              )}
              onLoad={() => setImageLoaded(true)}
              sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw'
            />

            {/* Badges */}
            <div className='absolute top-2 left-2 flex flex-wrap gap-1'>
              {course.isNew && (
                <span className='px-2 py-1 text-xs font-bold text-white bg-red-500 rounded'>
                  NEW
                </span>
              )}
              {course.isUpdated && (
                <span className='px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded'>
                  Update
                </span>
              )}
              {course.discountRate && (
                <span className='px-2 py-1 text-xs font-bold text-white bg-pink-500 rounded'>
                  {course.discountRate}% 할인
                </span>
              )}
            </div>

            {/* Wishlist button */}
            <button
              className='absolute top-2 right-2 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all'
              onClick={e => {
                e.preventDefault()
                // Handle wishlist
              }}
            >
              <HeartIcon className='w-5 h-5 text-gray-700' />
            </button>
          </div>

          {/* Content */}
          <div className='p-4'>
            <h3 className='font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-green-600 transition-colors'>
              {course.title}
            </h3>
            <p className='text-sm text-gray-600 mb-2'>{course.instructor}</p>

            {/* Rating */}
            <div className='flex items-center gap-1 mb-2'>
              <div className='flex items-center'>
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={clsx(
                      'w-4 h-4',
                      i < Math.floor(course.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    )}
                  />
                ))}
              </div>
              <span className='text-sm text-gray-600'>
                {course.rating} ({course.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className='flex items-center gap-2 mb-2'>
              {course.isFree ? (
                <span className='text-lg font-bold text-green-600'>무료</span>
              ) : (
                <>
                  {course.originalPrice &&
                    course.originalPrice > course.price && (
                      <span className='text-sm text-gray-400 line-through'>
                        {formatPrice(course.originalPrice)}
                      </span>
                    )}
                  <span className='text-lg font-bold text-gray-900'>
                    {formatPrice(course.price)}
                  </span>
                </>
              )}
            </div>

            {/* Tags */}
            <div className='flex flex-wrap gap-1 mb-2'>
              {course.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className='px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded'
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Student count */}
            <div className='flex items-center text-xs text-gray-500'>
              <span>{formatStudentCount(course.studentCount)}명의 수강생</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Hover Modal - Desktop only */}
      {isHovered && (
        <div className='hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] bg-white rounded-lg shadow-2xl z-50 border border-gray-200'>
          <Link href={courseUrl}>
            {/* Modal Content */}
            <div className='p-4'>
              {/* Title */}
              <h3 className='font-bold text-base text-gray-900 mb-2 line-clamp-2'>
                {course.title}
              </h3>

              <p className='text-sm text-gray-600 mb-3'>{course.instructor}</p>

              {/* Description */}
              {course.description && (
                <p className='text-sm text-gray-600 mb-3 line-clamp-2'>
                  {course.description}
                </p>
              )}

              {/* Learning Points - Show only first 3 */}
              {course.learningPoints && course.learningPoints.length > 0 && (
                <div className='mb-3'>
                  <div className='space-y-1'>
                    {course.learningPoints.slice(0, 3).map((point, index) => (
                      <div key={index} className='flex items-start gap-2'>
                        <CheckIcon className='w-3 h-3 text-blue-500 mt-1 flex-shrink-0' />
                        <span className='text-xs text-gray-700 line-clamp-1'>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price and Rating */}
              <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center gap-1'>
                  <StarIcon className='w-4 h-4 text-yellow-400' />
                  <span className='text-sm text-gray-600'>
                    {course.rating} ({course.reviewCount})
                  </span>
                </div>
                <div className='text-right'>
                  {course.originalPrice &&
                    course.originalPrice > course.price && (
                      <p className='text-xs text-gray-400 line-through'>
                        {formatPrice(course.originalPrice)}
                      </p>
                    )}
                  <p className='text-base font-bold'>
                    {course.discountRate && (
                      <span className='text-red-500 mr-1 text-sm'>
                        {course.discountRate}%
                      </span>
                    )}
                    {course.isFree ? '무료' : formatPrice(course.price)}
                  </p>
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={e => {
                  e.preventDefault()
                  // Handle add to cart
                }}
                className='w-full px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition-colors'
              >
                바구니에 담기
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}
