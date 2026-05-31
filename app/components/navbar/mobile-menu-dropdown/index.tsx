"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { MobileMenuHeader } from "./mobile-menu-header"
import { MobileMenuLinks } from "./mobile-menu-links"
import { MobileMenuLogin } from "./mobile-menu-login"
import { MobileMenuTrigger } from "./mobile-menu-trigger"

export const MobileMenuDropdown = () => {
    return (
        <Sheet>
            <MobileMenuTrigger />

            <SheetContent
                side="right"
                className="w-[280px] border-none bg-white text-gray-90"
            >
                <div className="flex h-full flex-col">
                    <MobileMenuHeader />

                    <div className="flex h-full flex-col justify-between pb-5 pl-5">
                        <MobileMenuLinks />
                        <MobileMenuLogin />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
