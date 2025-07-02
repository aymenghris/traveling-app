import { FC } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { IMAGES, PEOPLE_URL } from '@/constants'

interface CampSiteProps {
    backgroundImage: 'c-bg-img-campfire' | 'c-bg-img-tent'
    title: string
    subtitle: string
    peopleJoined: string
}

export const CampSite: FC<CampSiteProps> = ({
    backgroundImage,
    title,
    subtitle,
    peopleJoined,
}) => {
    return (
        <div
            className={clsx(
                'size-full min-w-[1100px]',
                'bg-cover bg-no-repeat',
                'lg:rounded-r-5xl 2xl:rounded-5xl',
                backgroundImage
            )}
        >
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="c-flex-center gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image
                            src={IMAGES.camp.map}
                            alt="map"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="c-bold-18 text-white">{title}</h4>
                        <p className="c-regular-14 text-white">{subtitle}</p>
                    </div>
                </div>

                <div className="c-flex-center gap-6">
                    <span className="flex -space-x-4 overflow-hidden">
                        {PEOPLE_URL.map((url) => (
                            <Image
                                className="inline-block size-10 rounded-full"
                                src={url}
                                key={url}
                                alt="person"
                                width={52}
                                height={52}
                            />
                        ))}
                    </span>
                    <p className="c-bold-16 md:c-bold-20 text-white">
                        {peopleJoined}
                    </p>
                </div>
            </div>
        </div>
    )
}
