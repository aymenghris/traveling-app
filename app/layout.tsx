import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata: Metadata = {
    title: 'Quest Quill',
    description:
        'Camping app simplifies outdoor trips with campsite locators, booking, trail maps, gear checklists, and offline access.',
}

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <Navbar />
                <main className="relative overflow-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
