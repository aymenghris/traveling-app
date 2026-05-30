import { STORES } from "@/constants/stores"
import { StoreButton } from "./store-button"

export const StoreButtons = () => {
    return (
        <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {STORES.map((store) => (
                <StoreButton key={store.title} {...store} />
            ))}
        </div>
    )
}
