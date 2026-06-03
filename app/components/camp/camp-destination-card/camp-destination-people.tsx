import Image from "next/image"
import { PEOPLE_IMAGES } from "@/constants/camp"

interface CampDestinationPeopleProps {
    joinedLabel: string
}

export const CampDestinationPeople = ({
    joinedLabel,
}: CampDestinationPeopleProps) => {
    return (
        <div className="flex items-center justify-center gap-6">
            <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_IMAGES.map((src) => (
                    <Image
                        key={src}
                        src={src}
                        alt="person"
                        width={52}
                        height={52}
                        className="inline-block size-10 rounded-full"
                    />
                ))}
            </span>

            <p className="font-bold text-white md:text-xl">{joinedLabel}</p>
        </div>
    )
}
