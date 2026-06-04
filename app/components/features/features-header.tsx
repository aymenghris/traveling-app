import Image from "next/image"
import { IMAGES } from "@/constants"

export const FeaturesHeader = () => {
    return (
        <div className="relative">
            <Image
                src={IMAGES.shared.camp}
                alt="camp"
                width={50}
                height={50}
                className="absolute -top-7 -left-1.25 w-10 lg:w-12.5"
            />

            <h2 className="font-bold text-[40px] capitalize lg:text-[64px]">
                our features
            </h2>
        </div>
    )
}
