import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/constants"

export const FooterBrand = () => {
    return (
        <Link href="/" className="mb-10">
            <Image
                src={IMAGES.shared.logo}
                alt="logo"
                width={180}
                height={29}
            />
        </Link>
    )
}