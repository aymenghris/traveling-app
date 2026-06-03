import { cn } from "@/lib/utils"
import { HeroBackground } from "./hero-background"
import { HeroContent } from "./hero-content"
import { HeroLocationCard } from "./hero-location-card"

export const Hero = () => {
    return (
        <section
            className={cn(
                "relative mx-auto max-w-360 px-6 py-10 pb-32",
                "flex flex-col gap-20",
                "overflow-hidden",
                "md:gap-28 lg:py-20 xl:flex-row",
                "3xl:px-0 lg:px-20",
            )}
        >
            <HeroBackground />
            <HeroContent />
            <HeroLocationCard />
        </section>
    )
}
