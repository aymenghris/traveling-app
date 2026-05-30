import clsx from "clsx"
import { CAMP_DESTINATIONS } from "@/constants/camp-destination"
import { CampDestinationCard } from "./camp-destination-card"

export const CampDestinationsScroller = () => {
    return (
        <div
            className={clsx(
                "flex items-start justify-start gap-8",
                "h-[340px] w-full",
                "lg:h-[480px] xl:h-[640px]",
                "scrollbar-hidden overflow-x-auto",
            )}
        >
            {CAMP_DESTINATIONS.map((destination) => (
                <CampDestinationCard
                    key={destination.campName}
                    {...destination}
                />
            ))}
        </div>
    )
}
