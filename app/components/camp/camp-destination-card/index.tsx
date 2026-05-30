import clsx from "clsx"
import type { CampDestination } from "@/types/camp"
import { CampDestinationHeader } from "./camp-destination-header"
import { CampDestinationPeople } from "./camp-destination-people"

export const CampDestinationCard = ({
    backgroundImageClassName,
    campName,
    location,
    joinedLabel,
}: CampDestination) => {
    return (
        <div
            className={clsx(
                "size-full min-w-[1100px]",
                "bg-cover bg-no-repeat",
                "lg:rounded-r-5xl 2xl:rounded-5xl",
                backgroundImageClassName,
            )}
        >
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <CampDestinationHeader
                    campName={campName}
                    location={location}
                />

                <CampDestinationPeople joinedLabel={joinedLabel} />
            </div>
        </div>
    )
}
