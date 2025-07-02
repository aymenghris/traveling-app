import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, IMAGES, SOCIALS } from '@/constants'
import { FC, ReactNode } from 'react'

export const Footer = () => (
    <footer className="c-flex-center mb-24">
        <div className="c-max-container c-padding-container flex w-full flex-col gap-14">
            <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                <Link href="/" className="mb-10">
                    <Image
                        src={IMAGES.shared.logo}
                        alt="logo"
                        width={180}
                        height={29}
                    />
                </Link>

                <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                    <LearnMoreAndCommunityLinks />
                    <ContactInfo />
                    <SocialLinks />
                </div>
            </div>

            <div className="bg-gray-20 border" />
            <p className="c-regular-14 text-gray-30 w-full text-center">
                2025 Quest Quil | All rights reserved
            </p>
        </div>
    </footer>
)

interface FooterColumnProps {
    title: string
    children: ReactNode
}

const FooterColumn: FC<FooterColumnProps> = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="c-bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

const LearnMoreAndCommunityLinks = () => (
    <>
        {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
                <ul className="c-regular-14 text-gray-30 flex flex-col gap-4">
                    {columns.links.map((link) => (
                        <Link href="/" key={link}>
                            {link}
                        </Link>
                    ))}
                </ul>
            </FooterColumn>
        ))}
    </>
)

const ContactInfo = () => (
    <div className="flex flex-col gap-5">
        <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="c-medium-14 text-blue-70 whitespace-nowrap">
                        {link.value}
                    </p>
                </Link>
            ))}
        </FooterColumn>
    </div>
)

const SocialLinks = () => (
    <div className="flex flex-col gap-5">
        <FooterColumn title={SOCIALS.title}>
            <ul className="c-regular-14 text-gray-30 flex gap-4">
                {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                        <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                ))}
            </ul>
        </FooterColumn>
    </div>
)
