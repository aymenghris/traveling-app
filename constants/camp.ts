import type { CampDestination } from "@/types/camp"

export const CAMP_DESTINATIONS = [
    {
        backgroundImageClassName: "bg-[url('/camp/campfire.jpg')]",
        campName: "Last Chance Creek Camp",
        location: "Plumas County, Califorina",
        joinedLabel: "50+ Joined",
    },
    {
        backgroundImageClassName: "bg-[url('/camp/tent.jpg')]",
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
