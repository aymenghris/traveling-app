import type { ReactNode } from "react"

interface FooterColumnProps {
    title: string
    children: ReactNode
}

export const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="c-bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}