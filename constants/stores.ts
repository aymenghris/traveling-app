import { IMAGES } from "@/constants"
import type { StoreConfig } from "@/types/store"

export const STORES: StoreConfig[] = [
    {
        title: "App Store",
        icon: IMAGES.getapp.apple,
        variant: "c-btn-white",
    },
    {
        title: "Play Store",
        icon: IMAGES.getapp.android,
        variant: "c-btn-dark-green-outline",
    },
]
