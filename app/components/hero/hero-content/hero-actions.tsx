import { PlayIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export const HeroActions = () => {
    return (
        <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button variant="green" size="lg">
                download app
            </Button>

            <Button variant="white" size="lg" capitalize={false}>
                <PlayIcon className="size-6" />
                <span className="first-letter:uppercase">how we work?</span>
            </Button>
        </div>
    )
}
