import clsx from "clsx"
import Image from "next/image"
import { IMAGES } from "@/constants"

export const CampGuidanceCallout = () => {
    return (
        <div className="c-flex-end mt-10 px-6 lg:-mt-60 lg:mr-6">
            <div
                className={clsx(
                    "relative w-full p-8",
                    "overflow-hidden rounded-3xl bg-green-50",
                    "lg:max-w-[500px] xl:max-w-[734px]",
                    "xl:rounded-5xl xl:px-16 xl:py-20",
                )}
            >
                <h2 className="c-regular-24 md:c-regular-32 2xl:c-regular-64 text-white capitalize 2xl:leading-[120%]">
                    <strong>Lost</strong> And Unsure Where To Go Next?
                </h2>

                <p className="c-regular-14 xl:c-regular-16 mt-5 text-white">
                    It’s natural to feel anxious when climbing somewhere new—the
                    risk of losing your way is high. That’s exactly why we’re
                    here: to help you start your adventure safely.
                </p>

                <Image
                    src={IMAGES.camp.quote}
                    alt=""
                    width={186}
                    height={219}
                    className={clsx(
                        "absolute -right-6 bottom-4 w-[140px]",
                        "3xl:right-0 lg:bottom-10 xl:-right-8 xl:w-[186px]",
                    )}
                />
            </div>
        </div>
    )
}
