import { GetAppText } from "./get-app-text"
import { StoreButtons } from "./store-buttons"

export const GetAppContent = () => {
    return (
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
            <GetAppText />
            <StoreButtons />
        </div>
    )
}