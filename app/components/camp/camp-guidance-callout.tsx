import Image from "next/image"
import { IMAGES } from "@/constants"
import { cn } from "@/lib/utils"

export const CampGuidanceCallout = () => {
    return (
        <div className="mt-10 flex items-center justify-end px-6 lg:-mt-60 lg:mr-6">
            <div
                className={cn(
                    "relative w-full p-8",
                    "overflow-hidden rounded-3xl bg-green-600/87",
                    "lg:max-w-125 xl:max-w-183.5",
                    "xl:rounded-5xl xl:px-16 xl:py-20",
                )}
            >
                <h2
                    className={cn(
                        "text-2xl text-white capitalize",
                        "md:text-[32px] 2xl:text-[64px] 2xl:leading-[120%]",
                    )}
                >
                    <strong>lost</strong> and unsure where to go next?
                </h2>

                <p className="mt-5 text-white max-xl:text-sm">
                    It’s natural to feel anxious when climbing somewhere new—the
                    risk of losing your way is high. That’s exactly why we’re
                    here: to help you start your adventure safely.
                </p>

                <Image
                    src={IMAGES.camp.quote}
                    alt="quote"
                    width={186}
                    height={219}
                    className={cn(
                        "absolute -right-6 bottom-4 w-35",
                        "3xl:right-0 lg:bottom-10 xl:-right-8 xl:w-46.5",
                    )}
                />
            </div>
        </div>
    )
}
