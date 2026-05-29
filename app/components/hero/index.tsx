import clsx from "clsx"
import { HeroBackground } from "./hero-background"
import { HeroContent } from "./hero-content"
import { HeroLocationCard } from "./hero-location-card"

export const Hero = () => {
    return (
        <section
            className={clsx(
                "relative overflow-hidden",
                "flex flex-col gap-20",
                "py-10 pb-32",
                "md:gap-28 lg:py-20 xl:flex-row",
                "c-max-container c-padding-container",
            )}
        >
            <HeroBackground />
            <HeroContent />
            <HeroLocationCard />
        </section>
    )
}
