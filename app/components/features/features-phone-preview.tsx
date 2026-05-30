import Image from 'next/image'
import clsx from 'clsx'

export const FeaturesPhonePreview = () => {
    return (
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
    )
}