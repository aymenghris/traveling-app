import Link from "next/link"
import { SheetClose } from "@/components/ui/sheet"
import { NAV_LINKS } from "@/constants/nav-links"

export const MobileMenuLinks = () => {
    return (
        <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
                <li key={link.key}>
                    <SheetClose asChild>
                        <Link
                            href={link.href}
                            className="text-base text-gray-80 transition-all hover:font-bold hover:text-green-60"
                        >
                            {link.label}
                        </Link>
                    </SheetClose>
                </li>
            ))}
        </ul>
    )
}
