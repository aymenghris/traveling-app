import type { Feature } from "@/types/feature"
import { FeatureCard } from "./feature-card"

interface FeaturesListProps {
    features: Feature[]
}

export const FeaturesList = ({ features }: FeaturesListProps) => {
    return (
        <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
            ))}
        </ul>
    )
}
