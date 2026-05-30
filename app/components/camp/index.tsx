import clsx from "clsx"
import { CampDestinationsScroller } from "./camp-destinations-scroller"
import { CampGuidanceCallout } from "./camp-guidance-callout"

export const Camp = () => {
    return (
        <section
            className={clsx(
                "relative flex flex-col py-10",
                "2xl:c-max-container lg:mb-10 lg:py-20 xl:mb-20",
            )}
        >
            <CampDestinationsScroller />
            <CampGuidanceCallout />
        </section>
    )
}