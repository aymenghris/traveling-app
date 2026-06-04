import { forwardRef } from "react"
import type { IconProps } from "@/types/icon"

export const CalendarIcon = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 28, className, ...props }, ref) => (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            className={className}
            aria-hidden="true"
            {...props}
        >
            <path
                d="M9.33334 2.33334V5.83334"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.6667 2.33334V5.83334"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.08334 10.605H23.9167"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24.5 9.91668V19.8333C24.5 23.3333 22.75 25.6667 18.6667 25.6667H9.33333C5.25 25.6667 3.5 23.3333 3.5 19.8333V9.91668C3.5 6.41668 5.25 4.08334 9.33333 4.08334H18.6667C22.75 4.08334 24.5 6.41668 24.5 9.91668Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.3105 15.9834H18.321"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.3105 19.4834H18.321"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.9947 15.9834H14.0052"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.9947 19.4834H14.0052"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.67669 15.9834H9.68717"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.67669 19.4834H9.68717"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
)

CalendarIcon.displayName = "CalendarIcon"
