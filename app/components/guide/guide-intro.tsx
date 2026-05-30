import Image from "next/image"
import { IMAGES } from "@/constants"
import { GuideContent } from "./guide-content"

export const GuideIntro = () => {
    return (
        <div className="c-padding-container c-max-container w-full pb-24">
            <Image src={IMAGES.shared.camp} alt="camp" width={50} height={50} />

            <p className="c-regular-18 -mt-1 mb-3 text-green-50 uppercase">
                We are here for you
            </p>

            <GuideContent
                title="Guide You to Easy Path"
                description="Only with the Quest Quil application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain"
            />
        </div>
    )
}