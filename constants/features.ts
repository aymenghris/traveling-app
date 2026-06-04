import {
    CalendarIcon,
    LocationIcon,
    MapIcon,
    TechIcon,
} from "@/components/icons"
import type { Feature } from "@/types/feature"

export const FEATURES = [
    {
        title: "real maps can be offline",
        icon: MapIcon,
        description:
            "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
    },
    {
        title: "set an adventure schedule",
        icon: CalendarIcon,
        description:
            "Schedule an adventure with friends. On holidays, there are many interesting offers from Quest Quil. That way, there's no more discussion",
    },
    {
        title: "technology using augment reality",
        icon: TechIcon,
        description:
            "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
    },
    {
        title: "many new locations every month",
        icon: LocationIcon,
        description:
            "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
    },
] satisfies Feature[]
