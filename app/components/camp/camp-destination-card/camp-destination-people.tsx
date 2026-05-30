import Image from "next/image"
import { PEOPLE_URL } from "@/constants"

interface CampDestinationPeopleProps {
    joinedLabel: string
}

export const CampDestinationPeople = ({
    joinedLabel,
}: CampDestinationPeopleProps) => {
    return (
        <div className="c-flex-center gap-6">
            <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((url) => (
                    <Image
                        key={url}
                        src={url}
                        alt=""
                        width={52}
                        height={52}
                        className="inline-block size-10 rounded-full"
                    />
                ))}
            </span>

            <p className="c-bold-16 md:c-bold-20 text-white">{joinedLabel}</p>
        </div>
    )
}