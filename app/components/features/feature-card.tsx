import Image from 'next/image'
import type { Feature } from '@/types/feature'

interface FeatureCardProps {
    feature: Feature
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
    const { title, icon, alt, description } = feature

    return (  
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full bg-green-50 p-4 lg:p-7">
                <Image src={icon} alt={alt} width={28} height={28} />
            </div>

            <h3 className="c-bold-20 lg:c-bold-32 mt-5 capitalize">{title}</h3>

            <p className="c-regular-16 text-gray-30 mt-5 bg-white/80 lg:mt-[30px] lg:bg-none">
                {description}
            </p>
        </li>
    )
}