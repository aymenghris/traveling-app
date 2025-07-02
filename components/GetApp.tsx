import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import { IMAGES } from '@/constants'

export const GetApp = () => {
    return (
        <section className="c-flex-center w-full flex-col pb-[100px]">
            <GetAppWrapper>
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="c-bold-40 lg:c-bold-64 xl:max-w-[320px]">
                        Get for free now!
                    </h2>
                    <p className="c-regular-16 text-gray-10">
                        Available on iOS and Android
                    </p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Button
                            type="button"
                            title="App Store"
                            icon={IMAGES.getapp.apple}
                            variant="c-btn-white"
                            full
                        />
                        <Button
                            type="button"
                            title="Play Store"
                            icon={IMAGES.getapp.android}
                            variant="c-btn-dark-green-outline"
                            full
                        />
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <Image
                        src={IMAGES.getapp.phones}
                        alt="phones"
                        width={550}
                        height={870}
                    />
                </div>
            </GetAppWrapper>
        </section>
    )
}

const GetAppWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div
            className={clsx(
                'flex flex-col justify-between gap-32',
                'c-max-container relative w-full px-6 py-12',
                'text-white',
                'bg-green-90',
                'c-bg-pattern-green bg-cover bg-center bg-no-repeat',
                'overflow-hidden',
                '2xl:rounded-5xl sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px]'
            )}
        >
            {children}
        </div>
    )
}
