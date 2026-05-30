import { FEATURES } from "@/constants/features"
import type { Feature } from "@/types/feature"
import { FeaturesHeader } from "./features-header"
import { FeaturesList } from "./features-list"
import { FeaturesPhonePreview } from "./features-phone-preview"

export const Features = () => {
    return (
        <section className="c-flex-center c-bg-pattren-white flex-col overflow-hidden bg-center bg-no-repeat py-24">
            <div className="c-max-container c-padding-container relative flex w-full justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <FeaturesPhonePreview />
                </div>

                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <FeaturesHeader />
                    <FeaturesList features={FEATURES as Feature[]} />
                </div>
            </div>
        </section>
    )
}
