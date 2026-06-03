import Image from "next/image"
import { IMAGES } from "@/constants"
import { cn } from "@/lib/utils"
import { GuideContent } from "./guide-content"

export const GuideIntro = () => {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-360 px-6 pb-24",
                "3xl:px-0 lg:px-20",
            )}
        >
            <Image src={IMAGES.shared.camp} alt="camp" width={50} height={50} />

            <p className="-mt-1 mb-3 text-green-600/87 text-lg uppercase">
                we are here for you
            </p>

            <GuideContent />
        </div>
    )
}
