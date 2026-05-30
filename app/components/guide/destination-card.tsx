import Image from "next/image"
import { IMAGES } from "@/constants"
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
        <div className="absolute flex gap-3 rounded-3xl border bg-white py-8 pr-7 pl-5 shadow-md md:left-[5%] lg:top-20">
            <Image
                src={IMAGES.guide.meter}
                alt="meter"
                width={16}
                height={158}
                className="h-full w-auto"
            />

            <div className="c-flex-between flex-col">
                <GuideInfoItem
                    label="Destination"
                    value={destination}
                    meta={duration}
                />

                <GuideInfoItem label="Start track" value={startTrack} nowrap />
            </div>
        </div>
    )
}
