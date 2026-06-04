import Image from "next/image"
import { IMAGES } from "@/constants"
import { cn } from "@/lib/utils"

export const FeaturesPhonePreview = () => {
    return (
        <Image
            src={IMAGES.features.phone}
            alt="phone"
            width={440}
            height={1000}
            className={cn(
                "absolute top-[13%] z-10 max-w-375 rotate-15",
                "hidden",
                "3xl:left-20 md:-left-16 lg:flex",
            )}
        />
    )
}
