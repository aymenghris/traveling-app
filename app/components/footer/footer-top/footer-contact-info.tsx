import Link from "next/link"
import { FOOTER_CONTACT_INFO } from "@/constants/footer"
import { FooterColumn } from "./footer-column"

export const FooterContactInfo = () => {
    return (
        <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <div className="flex flex-col gap-5">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                        href="/"
                        key={link.label}
                        className="flex gap-4 md:flex-col lg:flex-row"
                    >
                        <p className="whitespace-nowrap">{link.label}:</p>
                        <p className="c-medium-14 whitespace-nowrap text-blue-70">
                            {link.value}
                        </p>
                    </Link>
                ))}
            </div>
        </FooterColumn>
    )
}
