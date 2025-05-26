'use client'

import { ReactNode } from 'react'
import { Header } from '@/widgets/header'
import { BottomNavbar } from '@/widgets/bottom-nav'

interface NavigationProviderProps {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  return (
    <>
      <Header />
      <main className='min-h-screen pb-16 lg:pb-0'>{children}</main>
      <BottomNavbar />
    </>
  )
}
