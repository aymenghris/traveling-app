import Button from "@/components/Button"
import { IMAGES } from "@/constants"

export const HeroActions = () => {
    return (
        <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="c-btn-green" />
            <Button
                type="button"
                title="How we work?"
                icon={IMAGES.hero.play}
                variant="c-btn-white-text"
            />
        </div>
    )
}
