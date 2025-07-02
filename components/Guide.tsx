import Image from 'next/image'
import { IMAGES } from '@/constants'

export const Guide = () => {
    return (
        <section className="c-flex-center flex-col">
            <div className="c-padding-container c-max-container w-full pb-24">
                <Image
                    src={IMAGES.shared.camp}
                    alt="camp"
                    width={50}
                    height={50}
                />
                <p className="c-regular-18 -mt-1 mb-3 text-green-50 uppercase">
                    We are here for you
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="c-bold-40 lg:c-bold-64 xl:max-w-[390px]">
                        Guide You to Easy Path
                    </h2>
                    <p className="c-regular-16 text-gray-30 xl:max-w-[520px]">
                        Only with the Quest Quil application you will no longer
                        get lost and get lost again, because we already support
                        offline maps when there is no internet connection in the
                        field. Invite your friends, relatives and friends to
                        have fun in the wilderness through the valley and reach
                        the top of the mountain
                    </p>
                </div>
            </div>

            <div className="c-flex-center c-max-container relative w-full">
                <Image
                    src={IMAGES.guide.boats}
                    alt="boat"
                    width={1440}
                    height={580}
                    className="2xl:rounded-5xl w-full object-cover object-center"
                />

                <DestinationCard />
            </div>
        </section>
    )
}

const DestinationCard = () => {
    return (
        <div className="absolute flex gap-3 rounded-3xl border bg-white py-8 pr-7 pl-5 shadow-md md:left-[5%] lg:top-20">
            <Image
                src={IMAGES.guide.meter}
                alt="meter"
                width={16}
                height={158}
                className="h-full w-auto"
            />
            <div className="c-flex-between flex-col">
                <div className="flex w-full flex-col">
                    <div className="c-flex-between w-full">
                        <p className="c-regular-16 text-gray-20">Destination</p>
                        <p className="c-bold-16 text-green-50">45 min</p>
                    </div>
                    <p className="c-bold-20 mt-2">Birch Isle</p>
                </div>

                <div className="flex w-full flex-col">
                    <p className="c-regular-16 text-gray-20">Start track</p>
                    <h4 className="c-bold-20 mt-2 whitespace-nowrap">
                        Minong Flowage Launch
                    </h4>
                </div>
            </div>
        </div>
    )
}
