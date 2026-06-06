import { forwardRef } from "react"
import type { IconProps } from "@/types/icon"

export const FacebookIcon = forwardRef<SVGSVGElement, IconProps>(
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
            <path
                fillRule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                clipRule="evenodd"
            />
        </svg>
    ),
)

FacebookIcon.displayName = "FacebookIcon"
