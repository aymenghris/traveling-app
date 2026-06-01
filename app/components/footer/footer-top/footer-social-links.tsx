import Image from "next/image"
import Link from "next/link"
import { SOCIALS } from "@/constants/footer"
import { FooterColumn } from "./footer-column"

export const FooterSocialLinks = () => {
    return (
        <FooterColumn title={SOCIALS.title}>
            <ul className="c-regular-14 flex gap-4 text-gray-30">
                {SOCIALS.links.map((link) => (
                    <li key={link}>
                        <Link href="/">
                            <Image
                                src={link}
                                alt="social icon"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </FooterColumn>
    )
}
