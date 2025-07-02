import Image from 'next/image'
import clsx from 'clsx'
import { FEATURES, IMAGES } from '@/constants'
import { FC } from 'react'

export const Features = () => {
    return (
        <section className="c-flex-center c-bg-pattren-white flex-col overflow-hidden bg-center bg-no-repeat py-24">
            <div className="c-max-container c-padding-container relative flex w-full justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image
                        src="/phone.png"
                        alt="phone"
                        width={440}
                        height={1000}
                        className={clsx(
                            'absolute top-[13%] z-10 max-w-[1500px] rotate-[15deg]',
                            'hidden',
                            '3xl:left-20 md:-left-16 lg:flex'
                        )}
                    />
                </div>

                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <div className="relative">
                        <Image
                            src={IMAGES.shared.camp}
                            alt="camp"
                            width={50}
                            height={50}
                            className="absolute top-[-28px] left-[-5px] w-10 lg:w-[50px]"
                        />
                        <h2 className="c-bold-40 lg:c-bold-64">Our Features</h2>
                    </div>
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
                        {FEATURES.map((feature) => (
                            <FeatureItem
                                key={feature.title}
                                title={feature.title}
                                icon={feature.icon}
                                alt={feature.alt}
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

interface FeatureItemProps {
    title: string
    icon: string
    alt: string
    description: string
}

const FeatureItem: FC<FeatureItemProps> = ({
    title,
    icon,
    alt,
    description,
}) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full bg-green-50 p-4 lg:p-7">
                <Image src={icon} alt={alt} width={28} height={28} />
            </div>
            <h2 className="c-bold-20 lg:c-bold-32 mt-5 capitalize">{title}</h2>
            <p className="c-regular-16 text-gray-30 mt-5 bg-white/80 lg:mt-[30px] lg:bg-none">
                {description}
            </p>
        </li>
    )
}
