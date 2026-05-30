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
        <div className="c-flex-center gap-4">
            <div className="rounded-full bg-green-50 p-4">
                <Image src={IMAGES.camp.map} alt="" width={28} height={28} />
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="c-bold-18 text-white">{campName}</h4>
                <p className="c-regular-14 text-white">{location}</p>
            </div>
        </div>
    )
}
