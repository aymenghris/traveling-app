"use client"

import { cn } from "@/lib/utils"
import { DesktopNavLinks } from "./desktop-nav-links"
import { LoginButton } from "./login-button"
import { Logo } from "./logo"
import { MobileMenuDropdown } from "./mobile-menu-dropdown"

export const Navbar = () => {
    return (
        <nav
            className={cn(
                "relative z-30 mx-auto max-w-[1440px] px-6 py-5",
                "flex items-center justify-between",
                "3xl:px-0 lg:px-20",
            )}
        >
            <Logo />
            <DesktopNavLinks />
            <LoginButton />
            <MobileMenuDropdown />
        </nav>
    )
}
