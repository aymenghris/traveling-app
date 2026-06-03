import Image from "next/image"
import { IMAGES } from "@/constants"

interface CampDestinationHeaderProps {
    campName: string
    location: string
}

export const CampDestinationHeader = ({
    campName,
    location,
}: CampDestinationHeaderProps) => {
    return (
        <div className="flex items-center justify-center gap-4">
            <div className="rounded-full bg-green-600/87 p-4">
                <Image src={IMAGES.camp.map} alt="map" width={28} height={28} />
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="font-bold text-lg text-white">{campName}</h4>
                <p className="text-sm text-white">{location}</p>
            </div>
        </div>
    )
}
