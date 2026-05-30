import clsx from "clsx"
import { ReactNode } from "react"

type GetAppWrapperProps = {
    children: ReactNode
}

export const GetAppWrapper = ({ children }: GetAppWrapperProps) => {
    return (
        <div
            className={clsx(
                "flex flex-col justify-between gap-32",
                "c-max-container relative w-full px-6 py-12",
                "text-white",
                "bg-green-90",
                "c-bg-pattern-green bg-center bg-cover bg-no-repeat",
                "overflow-hidden",
                "sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl",
            )}
        >
            {children}
        </div>
    )
}
