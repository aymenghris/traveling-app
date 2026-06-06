import Link from "next/link"
import { FOOTER_LINKS } from "@/constants/footer"
import { FooterColumn } from "./footer-column"

export const FooterNavLinks = () => {
    return (
        <>
            {FOOTER_LINKS.map((column) => (
                <FooterColumn title={column.title} key={column.title}>
                    <ul className="flex flex-col gap-4 text-neutral-500/94 text-sm">
                        {column.items.map((label) => (
                            <li key={label}>
                                <Link href="/" className="capitalize">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </FooterColumn>
            ))}
        </>
    )
}
