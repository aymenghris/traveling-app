import Image from 'next/image'
import { IMAGES } from '@/constants'

export const FeaturesHeader = () => {
    return (
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
    )
}