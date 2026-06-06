import { forwardRef } from "react"
import type { IconProps } from "@/types/icon"

export const XIcon = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, className, ...props }, ref) => (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
            {...props}
        >
            <path d="M13.8 10.5L20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11l-7.3 9h3l5.7-7l5.1 7H22zm-2.4 3l-1.4-2l-5.6-7.9h2.3l4.5 6.3l1.4 2l6 8.5h-2.3l-4.9-7Z" />
        </svg>
    ),
)

XIcon.displayName = "XIcon"
