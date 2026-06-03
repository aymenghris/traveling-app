import Image from "next/image"
import { IMAGES } from "@/constants"
import { cn } from "@/lib/utils"
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
                className="absolute -top-7.5 -left-1.25 w-10 lg:w-12.5"
            />

            <h1
                className={cn(
                    "font-bold text-[52px] capitalize",
                    "lg:text-[88px] lg:leading-[120%]",
                )}
            >
                last chance creek
            </h1>

            <p className="mt-6 text-neutral-500/94 xl:max-w-130">
                We&apos;re here for every step of your journey to experience
                nature&apos;s untouched beauty. Start exploring the world—all in
                one simple app.
            </p>

            <HeroFeedback />
            <HeroActions />
        </div>
    )
}
