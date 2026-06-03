import type { CampDestination } from "@/types/camp"

export const CAMP_DESTINATIONS = [
    {
        backgroundImageClassName: "c-bg-img-campfire",
        campName: "Last Chance Creek Camp",
        location: "Plumas County, Califorina",
        joinedLabel: "50+ Joined",
    },
    {
        backgroundImageClassName: "c-bg-img-tent",
        campName: "Mountain View Camp",
        location: "Somewhere in the Wilderness",
        joinedLabel: "50+ Joined",
    },
] satisfies ReadonlyArray<CampDestination>

export const PEOPLE_IMAGES = [
    "/camp/people/person-1.png",
    "/camp/people/person-2.png",
    "/camp/people/person-3.png",
]
