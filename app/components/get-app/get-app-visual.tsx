import Image from "next/image"
import { IMAGES } from "@/constants"

export const GetAppVisual = () => {
    return (
        <div className="flex flex-1 items-center justify-end">
            <Image
                src={IMAGES.getapp.phones}
                alt="Mobile app preview on phones"
                width={550}
                height={870}
            />
        </div>
    )
}
