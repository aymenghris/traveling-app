import Link from 'next/link'
import Image from 'next/image'
import { IMAGES, NAV_LINKS } from '@/constants'
import Button from '@/components/Button'

// TODO: implement mobile menu
export const Navbar = () => (
    <div>
        <nav className="c-flex-between c-max-container c-padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    src={IMAGES.shared.logo}
                    alt="logo"
                    width={250}
                    height={29}
                />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="c-regular-16 c-flex-center cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:c-flex-center hidden">
                <Button
                    type="submit"
                    title="login"
                    icon={IMAGES.navbar.user}
                    variant="c-btn-dark-green"
                />
            </div>
            <Image
                src={IMAGES.navbar.menu}
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    </div>
)
