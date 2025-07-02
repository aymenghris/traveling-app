import clsx from 'clsx'
import Image from 'next/image'
import Button from '@/components/Button'
import { IMAGES } from '@/constants'

export const Hero = () => {
    return (
        <section
            className={clsx(
                'flex flex-col gap-20',
                'py-10 pb-32',
                'md:gap-28 lg:py-20 xl:flex-row',
                'c-max-container c-padding-container'
            )}
        >
            <HeroMap />

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <Image
                    src={IMAGES.shared.camp}
                    alt="camp"
                    width={50}
                    height={50}
                    className="absolute top-[-30px] left-[-5px] w-10 lg:w-[50px]"
                />
                <h1 className="c-bold-52 lg:c-bold-88 lg:leading-[120%]">
                    Last Chance Creek
                </h1>
                <p className="c-regular-16 text-gray-30 mt-6 xl:max-w-[520px]">
                    We're here for every step of your journey to experience
                    nature's untouched beauty. Start exploring the world—all in
                    one simple app.
                </p>
                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-1.5">
                        {Array(5)
                            .fill(1)
                            .map((_, index) => (
                                <Image
                                    src={IMAGES.hero.star}
                                    key={index}
                                    alt="star"
                                    width={24}
                                    height={24}
                                />
                            ))}
                    </div>

                    <p className="c-bold-16 lg:c-bold-20 text-blue-70">
                        168K
                        <span className="c-regular-16 lg:c-regular-20 ml-1">
                            Outstanding Feedback
                        </span>
                    </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title="Download App"
                        variant="c-btn-green"
                    />
                    <Button
                        type="button"
                        title="How we work?"
                        icon={IMAGES.hero.play}
                        variant="c-btn-white-text"
                    />
                </div>
            </div>

            <LocationInfoCard />
        </section>
    )
}

const HeroMap = () => {
    return (
        <div
            className={clsx(
                'absolute top-0 right-0 h-screen w-screen',
                'c-bg-pattern-destination bg-cover bg-center',
                'md:-right-28 xl:-top-60'
            )}
        />
    )
}

const LocationInfoCard = () => (
    <div className="relative flex flex-1 items-start">
        <div
            className={clsx(
                'flex flex-col gap-8',
                'relative z-20 w-[268px] px-7 py-8',
                'bg-green-90 rounded-3xl'
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
                <div className="flex flex-col">
                    <p className="c-regular-16 text-gray-20 block">Distance</p>
                    <p className="c-bold-20 text-white">133.58 mi</p>
                </div>
                <div className="flex flex-col">
                    <p className="c-regular-16 text-gray-20 block">Elevation</p>
                    <p className="c-bold-20 text-white">1.540 km</p>
                </div>
            </div>
        </div>
    </div>
)
