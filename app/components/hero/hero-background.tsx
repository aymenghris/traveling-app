import clsx from "clsx"

export const HeroBackground = () => {
    return (
        <div
            className={clsx(
                "absolute top-0 right-0 h-screen w-screen",
                "c-bg-pattern-destination bg-center bg-cover",
                "md:-right-28 xl:-top-60",
            )}
        />
    )
}
