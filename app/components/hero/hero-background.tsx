import { cn } from "@/lib/utils"

export const HeroBackground = () => {
    return (
        <div
            className={cn(
                "absolute top-0 right-0 h-screen w-screen",
                "bg-[url('/hero/pattern-destination.png')] bg-center bg-cover",
                "md:-right-28 xl:-top-60",
            )}
        />
    )
}
