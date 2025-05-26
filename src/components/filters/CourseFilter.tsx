'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
  ChevronDownIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useState } from 'react'

interface FilterOption {
  value: string
  label: string
  icon?: string
}

const priceFilters: FilterOption[] = [
  { value: 'all', label: '전체' },
  { value: 'free', label: '무료' },
  { value: 'paid', label: '유료' },
  { value: 'discount', label: '할인중 🔥' },
]

const levelFilters: FilterOption[] = [
  { value: 'all', label: '모든 수준' },
  { value: 'beginner', label: '입문' },
  { value: 'intermediate', label: '초급' },
  { value: 'advanced', label: '중급이상' },
]

const sortOptions: FilterOption[] = [
  { value: 'recommended', label: '추천순' },
  { value: 'popular', label: '인기순' },
  { value: 'recent', label: '최신순' },
  { value: 'rating', label: '평점순' },
  { value: 'students', label: '학생수순' },
]

export default function CourseFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)

  const currentPrice = searchParams.get('price') || 'all'
  const currentLevel = searchParams.get('level') || 'all'
  const currentSort = searchParams.get('sort') || 'recommended'

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all' || (key === 'sort' && value === 'recommended')) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div className='bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
          {/* Price and Level Filters */}
          <div className='flex flex-wrap items-center gap-2 lg:gap-4'>
            {/* Price Filter */}
            <div className='flex items-center bg-gray-50 rounded-md p-1'>
              {priceFilters.map(filter => {
                const isActive = currentPrice === filter.value
                return (
                  <button
                    key={filter.value}
                    onClick={() => updateFilter('price', filter.value)}
                    className={clsx(
                      'relative px-3 py-1.5 text-sm font-medium rounded transition-all',
                      isActive
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    {isActive && filter.value !== 'all' && (
                      <CheckIcon className='absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-green-500' />
                    )}
                    <span
                      className={clsx(
                        isActive && filter.value !== 'all' && 'pl-4'
                      )}
                    >
                      {filter.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Level Filter */}
            <div className='flex items-center bg-gray-50 rounded-md p-1'>
              {levelFilters.map(filter => {
                const isActive = currentLevel === filter.value
                return (
                  <button
                    key={filter.value}
                    onClick={() => updateFilter('level', filter.value)}
                    className={clsx(
                      'relative px-3 py-1.5 text-sm font-medium rounded transition-all',
                      isActive
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    {isActive && filter.value !== 'all' && (
                      <CheckIcon className='absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-green-500' />
                    )}
                    <span
                      className={clsx(
                        isActive && filter.value !== 'all' && 'pl-4'
                      )}
                    >
                      {filter.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className='flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              <span>
                {sortOptions.find(opt => opt.value === currentSort)?.label}
              </span>
              <ChevronDownIcon
                className={clsx(
                  'w-4 h-4 transition-transform',
                  sortDropdownOpen && 'rotate-180'
                )}
              />
            </button>

            {sortDropdownOpen && (
              <div className='absolute right-0 z-10 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='py-1' role='menu'>
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateFilter('sort', option.value)
                        setSortDropdownOpen(false)
                      }}
                      className={clsx(
                        'block w-full px-4 py-2 text-sm text-left hover:bg-gray-100',
                        currentSort === option.value
                          ? 'text-green-600 font-medium'
                          : 'text-gray-700'
                      )}
                      role='menuitem'
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Active filters display */}
        {(currentPrice !== 'all' || currentLevel !== 'all') && (
          <div className='mt-3 flex flex-wrap gap-2'>
            {currentPrice !== 'all' && (
              <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200'>
                {priceFilters.find(f => f.value === currentPrice)?.label}
                <button
                  onClick={() => updateFilter('price', 'all')}
                  className='ml-1.5 hover:text-green-900'
                >
                  <XMarkIcon className='w-3 h-3' />
                </button>
              </span>
            )}
            {currentLevel !== 'all' && (
              <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200'>
                {levelFilters.find(f => f.value === currentLevel)?.label}
                <button
                  onClick={() => updateFilter('level', 'all')}
                  className='ml-1.5 hover:text-green-900'
                >
                  <XMarkIcon className='w-3 h-3' />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
