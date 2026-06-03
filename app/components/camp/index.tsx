import { cn } from "@/lib/utils"
import { CampDestinationsScroller } from "./camp-destinations-scroller"
import { CampGuidanceCallout } from "./camp-guidance-callout"

export const Camp = () => {
    return (
        <section
            className={cn(
                "relative flex flex-col py-10",
                "lg:mb-10 lg:py-20 xl:mb-20 2xl:mx-auto 2xl:max-w-360",
            )}
        >
            <CampDestinationsScroller />
            <CampGuidanceCallout />
        </section>
    )
}
