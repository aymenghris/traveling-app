import Button from "@/components/Button";
import type { ComponentProps } from "react";

export type StoreConfig = Pick<
    ComponentProps<typeof Button>,
    "title" | "icon" | "variant"
>
