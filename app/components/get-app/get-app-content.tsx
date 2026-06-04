import { AndroidIcon, AppleIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export const GetAppContent = () => {
    return (
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
            <h2 className="font-bold text-[40px] first-letter:uppercase lg:text-[64px] xl:max-w-[320px]">
                get for free now!
            </h2>

            <p className="font-medium text-neutral-100">
                Available on iOS and Android
            </p>

            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                <Button variant="white-green" size="lg">
                    <AppleIcon className="size-6" />
                    app store
                </Button>

                <Button variant="dark-green-outline" size="lg">
                    <AndroidIcon className="size-6" />
                    play store
                </Button>
            </div>
        </div>
    )
}
