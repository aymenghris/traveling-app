import clsx from "clsx"
import Image from "next/image"
import { IMAGES } from "@/constants"

const locationDetails = [
    { label: "Distance", value: "133.58 mi" },
    { label: "Elevation", value: "1.540 km" },
]

export const HeroLocationCard = () => {
    return (
        <div className="relative flex flex-1 items-start">
            <div
                className={clsx(
                    "relative z-20 w-[268px]",
                    "flex flex-col gap-8",
                    "rounded-3xl bg-green-90 px-7 py-8",
                )}
            >
                <div className="flex flex-col">
                    <div className="c-flex-between">
                        <p className="c-regular-16 text-gray-20">Location</p>
                        <Image
                            src={IMAGES.hero.close}
                            alt="close"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="c-bold-20 text-white">Plumas County</p>
                </div>

                <div className="c-flex-between">
                    {locationDetails.map((item) => (
                        <div key={item.label} className="flex flex-col">
                            <p className="c-regular-16 text-gray-20 block">
                                {item.label}
                            </p>
                            <p className="c-bold-20 text-white">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
