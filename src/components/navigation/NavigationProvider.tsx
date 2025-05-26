'use client'

import { ReactNode } from 'react'
import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'

interface NavigationProviderProps {
  children: ReactNode
}

export default function NavigationProvider({
  children,
}: NavigationProviderProps) {
  return (
    <>
      <TopNavbar />
      <main className='min-h-screen pb-16 lg:pb-0'>{children}</main>
      <BottomNavbar />
    </>
  )
}
