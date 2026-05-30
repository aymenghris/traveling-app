import type { ComponentProps } from "react"
import Button from "@/components/Button"

type StoreButtonProps = Pick<
    ComponentProps<typeof Button>,
    "title" | "icon" | "variant"
>

export const StoreButton = ({ title, icon, variant }: StoreButtonProps) => {
    return (
        <Button
            type="button"
            title={title}
            icon={icon}
            variant={variant}
            full
        />
    )
}