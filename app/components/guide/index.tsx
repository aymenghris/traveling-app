import { GuideHero } from "./guide-hero"
import { GuideIntro } from "./guide-intro"

export const Guide = () => {
    return (
        <section className="c-flex-center flex-col">
            <GuideIntro />
            <GuideHero />
        </section>
    )
}
