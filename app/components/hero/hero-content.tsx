import Image from "next/image"
import { IMAGES } from "@/constants"
import { HeroActions } from "./hero-actions"
import { HeroFeedback } from "./hero-feedback"

export const HeroContent = () => {
    return (
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image
                src={IMAGES.shared.camp}
                alt="camp"
                width={50}
                height={50}
                className="absolute top-[-30px] left-[-5px] w-10 lg:w-[50px]"
            />

            <h1 className="c-bold-52 lg:c-bold-88 lg:leading-[120%]">
                Last Chance Creek
            </h1>

            <p className="c-regular-16 text-gray-30 mt-6 xl:max-w-[520px]">
                We&apos;re here for every step of your journey to experience
                nature&apos;s untouched beauty. Start exploring the world—all in
                one simple app.
            </p>

            <HeroFeedback />
            <HeroActions />
        </div>
    )
}
