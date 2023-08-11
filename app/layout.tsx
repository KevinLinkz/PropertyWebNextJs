import type { Metadata } from 'next'
import AppWrapper from './AppWrapper'

export const metadata: Metadata = {
  title: 'Sell Property',
  description: 'Sell, Rent, Marketing property',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <AppWrapper>{children}</AppWrapper>
  )
}
