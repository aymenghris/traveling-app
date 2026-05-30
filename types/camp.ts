export type CampBackgroundImageClassName = "c-bg-img-campfire" | "c-bg-img-tent"

export interface CampDestination {
    backgroundImageClassName: CampBackgroundImageClassName
    campName: string
    location: string
    joinedLabel: string
}
