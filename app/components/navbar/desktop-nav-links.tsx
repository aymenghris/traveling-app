import Link from "next/link"
import { NAV_LINKS } from "@/constants"

export const DesktopNavLinks = () => (
    <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
            <li key={link.key}>
                <Link
                    href={link.href}
                    className="c-regular-16 c-flex-center cursor-pointer pb-1.5 text-gray-80 transition-all hover:font-bold hover:text-green-60"
                >
                    {link.label}
                </Link>
            </li>
        ))}
    </ul>
)
