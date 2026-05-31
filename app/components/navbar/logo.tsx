import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/constants"

export const Logo = () => (
    <Link href="/">
        <Image
            src={IMAGES.shared.logo}
            alt="Company Logo"
            width={250}
            height={29}
            priority
        />
    </Link>
)
