import Image from "next/image"
import { IMAGES } from "@/constants"
import { cn } from "@/lib/utils"
import { GuideInfoItem } from "./guide-info-item"

type DestinationCardProps = {
    duration: string
    destination: string
    startTrack: string
}

export const DestinationCard = ({
    duration,
    destination,
    startTrack,
}: DestinationCardProps) => {
    return (
        <div
            className={cn(
                "absolute py-8 pr-7 pl-5",
                "flex gap-3",
                "rounded-3xl border bg-white shadow-md",
                "md:left-[5%] lg:top-20",
            )}
        >
            <Image
                src={IMAGES.guide.meter}
                alt="meter"
                width={16}
                height={158}
                className="h-full w-auto"
            />

            <div className="flex flex-col items-center justify-between">
                <GuideInfoItem
                    label="destination"
                    value={destination}
                    meta={duration}
                />

                <GuideInfoItem label="start track" value={startTrack} nowrap />
            </div>
        </div>
    )
}
