import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const LOCATION_DETAILS = [
    { label: "distance", value: "133.58 mi" },
    { label: "elevation", value: "1.540 km" },
]

export const HeroLocationCard = () => {
    return (
        <div className="relative flex flex-1 items-start">
            <div
                className={cn(
                    "relative z-20 w-67",
                    "flex flex-col gap-8",
                    "rounded-3xl bg-olive-800 px-7 py-8",
                )}
            >
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <p className="text-neutral-400 capitalize">location</p>
                        <XIcon className="size-6 stroke-[1.5px] text-white" />
                    </div>
                    <p className="font-bold text-white text-xl capitalize">
                        plumas county
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    {LOCATION_DETAILS.map((item) => (
                        <div key={item.label} className="flex flex-col">
                            <p className="text-neutral-400 capitalize">
                                {item.label}
                            </p>
                            <p className="font-bold text-white text-xl">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
