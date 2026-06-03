import { StarIcon } from "@/components/icons"

const TOTAL_STARS = 5

export const HeroFeedback = () => {
    return (
        <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-1.5">
                {Array.from({ length: TOTAL_STARS }).map((_, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Fixed 5-item array, never reorders
                    <StarIcon key={index} className="size-6" />
                ))}
            </div>

            <p className="text-slate-950 lg:text-xl">
                <span className="font-bold uppercase">168k</span>
                <span className="ml-2.5 capitalize">outstanding feedback</span>
            </p>
        </div>
    )
}
