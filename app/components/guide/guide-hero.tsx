import Image from "next/image"
import { IMAGES } from "@/constants"
import { DestinationCard } from "./destination-card"

export const GuideHero = () => {
    return (
        <div className="c-flex-center c-max-container relative w-full">
            <Image
                src={IMAGES.guide.boats}
                alt="boat"
                width={1440}
                height={580}
                className="w-full object-cover object-center 2xl:rounded-5xl"
            />

            <DestinationCard
                duration="45 min"
                destination="Birch Isle"
                startTrack="Minong Flowage Launch"
            />
        </div>
    )
}