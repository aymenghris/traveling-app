export type CampBackgroundImageClassName =
    | "bg-[url('/camp/campfire.jpg')]"
    | "bg-[url('/camp/tent.jpg')]"

export interface CampDestination {
    backgroundImageClassName: CampBackgroundImageClassName
    campName: string
    location: string
    joinedLabel: string
}
