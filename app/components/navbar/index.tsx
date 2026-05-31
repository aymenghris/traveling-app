"use client"

import { DesktopNavLinks } from "./desktop-nav-links"
import { LoginButton } from "./login-button"
import { Logo } from "./logo"
import { MobileMenuDropdown } from "./mobile-menu-dropdown"

export const Navbar = () => {
    return (
        <nav className="c-flex-between c-max-container c-padding-container relative z-30 py-5">
            <Logo />
            <DesktopNavLinks />
            <LoginButton />
            <MobileMenuDropdown />
        </nav>
    )
}
