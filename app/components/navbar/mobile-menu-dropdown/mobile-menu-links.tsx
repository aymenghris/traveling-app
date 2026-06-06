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
                            className="text-neutral-950/96 transition-all hover:font-bold hover:text-green-600/87"
                        >
                            {link.label}
                        </Link>
                    </SheetClose>
                </li>
            ))}
        </ul>
    )
}
