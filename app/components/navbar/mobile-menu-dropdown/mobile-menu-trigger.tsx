import Image from "next/image"
import { SheetTrigger } from "@/components/ui/sheet"
import { IMAGES } from "@/constants"

export const MobileMenuTrigger = () => {
    return (
        <SheetTrigger asChild>
            <button
                type="button"
                className="inline-block cursor-pointer lg:hidden"
                aria-label="Open mobile menu"
            >
                <Image
                    src={IMAGES.navbar.menu}
                    alt="menu"
                    width={32}
                    height={32}
                />
            </button>
        </SheetTrigger>
    )
}
