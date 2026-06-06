import Link from "next/link"
import { SOCIALS } from "@/constants/footer"
import { FooterColumn } from "./footer-column"

export const FooterSocialLinks = () => {
    return (
        <FooterColumn title={SOCIALS.title}>
            <ul className="flex gap-4 text-neutral-800 text-sm">
                {SOCIALS.items.map(({ label, icon: Icon }) => (
                    <li key={label}>
                        <Link href="/">
                            <Icon />
                        </Link>
                    </li>
                ))}
            </ul>
        </FooterColumn>
    )
}
