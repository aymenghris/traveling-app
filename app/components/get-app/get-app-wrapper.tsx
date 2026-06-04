import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GetAppWrapperProps {
    children: ReactNode
}

export const GetAppWrapper = ({ children }: GetAppWrapperProps) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-between gap-32",
                "c-max-container relative w-full px-6 py-12",
                "text-white",
                "bg-olive-800",
                "c-bg-pattern-green bg-center bg-cover bg-no-repeat",
                "overflow-hidden",
                "sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-149.5 2xl:rounded-5xl",
            )}
        >
            {children}
        </div>
    )
}
