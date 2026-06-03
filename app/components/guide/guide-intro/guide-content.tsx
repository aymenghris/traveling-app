import { cn } from "@/lib/utils"

export const GuideContent = () => {
    return (
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2
                className={cn(
                    "font-bold text-[40px] xl:max-w-[390px]",
                    "lg:text-[64px]",
                )}
            >
                Guide You to Easy Path
            </h2>

            <p className="text-neutral-500/94 xl:max-w-[520px]">
                Only with the Quest Quil application you will no longer get lost
                and get lost again, because we already support offline maps when
                there is no internet connection in the field. Invite your
                friends, relatives and friends to have fun in the wilderness
                through the valley and reach the top of the mountain.
            </p>
        </div>
    )
}
