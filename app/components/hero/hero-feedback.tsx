import Image from "next/image"
import { IMAGES } from "@/constants"

const TOTAL_STARS = 5

export const HeroFeedback = () => {
    return (
        <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-1.5">
                {Array.from({ length: TOTAL_STARS }).map((_, index) => (
                    <Image
                        key={index}
                        src={IMAGES.hero.star}
                        alt="star"
                        width={24}
                        height={24}
                    />
                ))}
            </div>

            <p className="c-bold-16 lg:c-bold-20 text-blue-70">
                168K
                <span className="c-regular-16 lg:c-regular-20 ml-1">
                    Outstanding Feedback
                </span>
            </p>
        </div>
    )
}
