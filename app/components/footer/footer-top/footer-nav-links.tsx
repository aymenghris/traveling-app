import Link from "next/link"
import { FOOTER_LINKS } from "@/constants/footer"
import { FooterColumn } from "./footer-column"

export const FooterNavLinks = () => {
    return (
        <>
            {FOOTER_LINKS.map((column) => (
                <FooterColumn title={column.title} key={column.title}>
                    <ul className="c-regular-14 flex flex-col gap-4 text-gray-30">
                        {column.links.map((link) => (
                            <li key={link}>
                                <Link href="/">{link}</Link>
                            </li>
                        ))}
                    </ul>
                </FooterColumn>
            ))}
        </>
    )
}
