'use client'

import { ReactNode } from 'react'
import { NavigationProvider } from './navigation'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <NavigationProvider>{children}</NavigationProvider>
}
