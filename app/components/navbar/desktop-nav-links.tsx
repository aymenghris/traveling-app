import Link from "next/link"
import { NAV_LINKS } from "@/constants/nav-links"
import { cn } from "@/lib/utils"

export const DesktopNavLinks = () => (
    <ul className="hidden h-full gap-7 px-5 lg:flex">
        {NAV_LINKS.map((link) => (
            <li key={link.key}>
                <Link
                    href={link.href}
                    className={cn(
                        "pb-1.5",
                        "flex items-center justify-center",
                        "text-nowrap text-gray-800",
                        "transition-all",
                        "hover:font-bold hover:text-green-600/87",
                    )}
                >
                    {link.label}
                </Link>
            </li>
        ))}
    </ul>
)
