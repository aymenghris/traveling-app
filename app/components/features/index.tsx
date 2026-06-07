import { FEATURES } from "@/constants/features"
import { cn } from "@/lib/utils"
import { FeaturesHeader } from "./features-header"
import { FeaturesList } from "./features-list"
import { FeaturesPhonePreview } from "./features-phone-preview"

export const Features = () => {
    return (
        <section
            className={cn(
                "py-24",
                "flex flex-col items-center justify-center",
                "bg-[url('/features/pattern-white.png')] bg-center bg-no-repeat",
                "overflow-hidden",
            )}
        >
            <div
                className={cn(
                    "relative mx-auto max-w-360 px-6",
                    "flex w-full justify-end",
                    "3xl:px-0 lg:px-20",
                )}
            >
                <div className="flex flex-1 lg:min-h-225">
                    <FeaturesPhonePreview />
                </div>

                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <FeaturesHeader />
                    <FeaturesList features={FEATURES} />
                </div>
            </div>
        </section>
    )
}
