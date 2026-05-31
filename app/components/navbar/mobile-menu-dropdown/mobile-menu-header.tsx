import Image from "next/image"
import Link from "next/link"
import { SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { IMAGES } from "@/constants"

export const MobileMenuHeader = () => {
    return (
        <SheetHeader className="mb-8">
            <SheetTitle className="sr-only">Mobile navigation</SheetTitle>

            <SheetClose asChild>
                <Link href="/" className="w-fit">
                    <Image
                        src={IMAGES.shared.logo}
                        alt="logo"
                        width={180}
                        height={21}
                    />
                </Link>
            </SheetClose>
        </SheetHeader>
    )
}
