import Image from "next/image"
import { IMAGES } from "@/constants"
import { DestinationCard } from "./destination-card"

const DESTINATION_DETAILS = {
    destination: "birch isle",
    startTrack: "minong flowage launch",
    duration: "45 min",
}

export const GuideHero = () => {
    return (
        <div className="relative mx-auto flex w-full max-w-360 items-center justify-center">
            <Image
                src={IMAGES.guide.boats}
                alt="boat"
                width={1440}
                height={580}
                className="w-full object-cover object-center 2xl:rounded-5xl"
            />

            <DestinationCard {...DESTINATION_DETAILS} />
        </div>
    )
}
