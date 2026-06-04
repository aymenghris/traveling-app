import type { Feature } from "@/types/feature"

interface FeatureCardProps {
    feature: Feature
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
    const { title, icon: Icon, description } = feature

    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full bg-green-600/87 p-4 lg:p-7">
                <Icon className="text-white" />
            </div>

            <h3 className="mt-5 font-bold text-xl capitalize lg:text-[32px]">
                {title}
            </h3>

            <p className="mt-5 bg-white/80 text-neutral-500/94 lg:mt-7.5 lg:bg-none">
                {description}
            </p>
        </li>
    )
}
