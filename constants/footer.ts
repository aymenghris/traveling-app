import {
    FacebookIcon,
    InstagramIcon,
    WordPressIcon,
    XIcon,
    YoutubeIcon,
} from "@/components/icons/socials"

export const FOOTER_LINKS = [
    {
        title: "learn more",
        items: [
            "about quest quil",
            "press releases",
            "environment",
            "jobs",
            "privacy policy",
            "contact us",
        ],
    },
    {
        title: "our community",
        items: [
            "climbing stonepeak",
            "hiking quest quil",
            "quest quil ridgeway",
        ],
    },
]

export const FOOTER_CONTACT_INFO = {
    title: "contact us",
    items: [
        { label: "Admin Officer", value: "123-456-7890" },
        { label: "Email Officer", value: "quest.quil@contact.com" },
    ],
}

export const SOCIALS = {
    title: "socials",
    items: [
        { label: "facebook", icon: FacebookIcon },
        { label: "instagram", icon: InstagramIcon },
        { label: "x", icon: XIcon },
        { label: "youtube", icon: YoutubeIcon },
        { label: "wordpress", icon: WordPressIcon },
    ],
}
