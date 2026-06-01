import type { Metadata } from "next"
import { Geist } from "next/font/google"
import type { FC, ReactNode } from "react"
import { Footer, Navbar } from "@/app/components"
import "./globals.css"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
    title: "Quest Quill",
    description:
        "Camping app simplifies outdoor trips with campsite locators, booking, trail maps, gear checklists, and offline access.",
}

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en" className={cn("font-sans", geist.variable)}>
            <body>
                <Navbar />
                <main className="relative overflow-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
