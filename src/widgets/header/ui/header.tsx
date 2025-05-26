// app/components/navigation/TopNavbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { BrandLogo } from '@/shared/assets'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
  highlight?: boolean
}

const navItems: NavItem[] = [
  { label: '강의', href: '/' },
  { label: '로드맵', href: '/roadmaps' },
  { label: '멘토링', href: '/mentoring' },
  { label: '커뮤니티', href: '/community' },
]

export  function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200'>
      {/* Desktop Navigation */}
      <nav className='hidden lg:block'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            {/* Left section */}
            <div className='flex items-center space-x-8'>
              <Link href='/' className='flex items-center'>
                <Image
                  src={BrandLogo}
                  alt='brand-logo'
                  width={100}
                  height={100}
                />
              </Link>

              <div className='flex items-center space-x-6'>
                {navItems.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      'text-gray-700 hover:text-gray-900 font-medium transition-colors',
                      item.highlight && 'text-green-500 hover:text-green-600'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center search */}
            <div className='flex-1 max-w-xl mx-8'>
              <div
                className={clsx(
                  'relative transition-all duration-200',
                  searchFocused && 'transform scale-105'
                )}
              >
                <input
                  type='text'
                  placeholder='나의 진짜 성장을 도와줄 실무 강의를 찾아보세요'
                  className='w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500'
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <MagnifyingGlassIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
              </div>
            </div>

            {/* Right section */}
            <div className='flex items-center space-x-4'>
              <button className='text-gray-700 hover:text-gray-900'>
                <ShoppingCartIcon className='w-6 h-6' />
                <span className='sr-only'>장바구니</span>
              </button>
              <button className='px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900'>
                로그인
              </button>
              <button className='px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 transition-colors'>
                회원가입
              </button>
            </div>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className='bg-gray-50 border-t border-gray-200'>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='flex items-center space-x-8 h-12'>
              <button className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                <span>MY 카테고리</span>
              </button>
              <Link
                href='/' // href: '/courses'
                className='text-sm text-gray-600 hover:text-gray-900'
              >
                보안 · 네트워크
              </Link>
              <Link
                href='/' // href: '/courses'
                className='text-sm text-gray-600 hover:text-gray-900'
              >
                개발 · 프로그래밍
              </Link>
              <Link
                href='/' // href: '/courses'
                className='text-sm text-gray-600 hover:text-gray-900'
              >
                게임 개발
              </Link>
              <Link
                href='/' // href: '/courses'
                className='text-sm text-gray-600 hover:text-gray-900'
              >
                데이터 사이언스
              </Link>
              <Link
                href='/' // href: '/courses'
                className='text-sm text-gray-600 hover:text-gray-900'
              >
                인공지능
              </Link>
              <Link
                href='/' // href: '/courses'
                className='text-sm text-gray-600 hover:text-gray-900'
              >
                하드웨어
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className='lg:hidden'>
        <div className='px-4 py-3'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='flex items-center'>
              <Image
                src={BrandLogo}
                alt='brand-logo'
                width={100}
                height={100}
              />
            </Link>

            <div className='flex items-center space-x-3'>
              <button className='p-2'>
                <MagnifyingGlassIcon className='w-6 h-6 text-gray-700' />
              </button>
              <button className='p-2'>
                <ShoppingCartIcon className='w-6 h-6 text-gray-700' />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='p-2'
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className='w-6 h-6 text-gray-700' />
                ) : (
                  <Bars3Icon className='w-6 h-6 text-gray-700' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className='mt-4 pt-4 border-t border-gray-200'>
              <div className='space-y-3'>
                {navItems.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className='block py-2 text-base font-medium text-gray-700'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className='pt-3 space-y-3 border-t border-gray-200'>
                  <button className='block w-full py-2 text-left text-base font-medium text-gray-700'>
                    로그인
                  </button>
                  <button className='block w-full py-2 text-center text-base font-medium text-white bg-green-500 rounded hover:bg-green-600'>
                    회원가입
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
