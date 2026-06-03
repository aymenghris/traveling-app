import { CAMP_DESTINATIONS } from "@/constants/camp"
import { cn } from "@/lib/utils"
import { CampDestinationCard } from "./camp-destination-card"

export const CampDestinationsScroller = () => {
    return (
        <div
            className={cn(
                "flex items-start justify-start gap-8",
                "h-85 w-full",
                "lg:h-120 xl:h-160",
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
