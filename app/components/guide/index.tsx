import { GuideHero } from "./guide-hero"
import { GuideIntro } from "./guide-intro"

export const Guide = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <GuideIntro />
            <GuideHero />
        </section>
    )
}
