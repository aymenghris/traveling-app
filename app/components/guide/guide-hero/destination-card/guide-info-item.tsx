import { cn } from "@/lib/utils"

type GuideInfoItemProps = {
    label: string
    value: string
    meta?: string
    nowrap?: boolean
}

export const GuideInfoItem = ({
    label,
    value,
    meta,
    nowrap = false,
}: GuideInfoItemProps) => {
    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full items-center justify-between">
                <p className="text-neutral-400 first-letter:uppercase">
                    {label}
                </p>

                {meta && <p className="font-bold text-green-600/87">{meta}</p>}
            </div>

            <p
                className={cn(
                    "mt-2 font-bold text-xl capitalize",
                    nowrap && "whitespace-nowrap",
                )}
            >
                {value}
            </p>
        </div>
    )
}
