'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
  DashboardIcon,
  CoursesIcon,
  RoadmapIcon,
  MentoringIcon,
  MoreIcon,
} from '@/shared/assets'

interface NavItem {
  label: string
  href: string
  icon: React.FC<{ className?: string }>
}

const navItems: NavItem[] = [
  {
    label: '대시보드',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    label: '강의',
    href: '/',
    icon: CoursesIcon,
  },
  {
    label: '로드맵',
    href: '/roadmaps',
    icon: RoadmapIcon,
  },
  {
    label: '멘토링',
    href: '/mentoring',
    icon: MentoringIcon,
  },
  {
    label: '더보기',
    href: '/more',
    icon: MoreIcon,
  },
]

export function BottomNavbar() {
  const pathname = usePathname()

  return (
    <nav className='lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50'>
      <div className='grid grid-cols-5 h-16'>
        {navItems.map(item => {
          const isActive =
            pathname === item.href ||
            (item.href !== '/' && pathname.startsWith(item.href))
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex flex-col items-center justify-center space-y-1 transition-colors',
                isActive ? 'text-green-500' : 'text-gray-500'
              )}
            >
              <Icon className='w-6 h-6' />
              <span className='text-xs font-medium'>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
