import { cn } from "@/lib/utils"
import { FooterBottom } from "./footer-bottom"
import { FooterTop } from "./footer-top"

export const Footer = () => {
    return (
        <footer className="mb-24 flex items-center justify-center">
            <div
                className={cn(
                    "mx-auto w-full max-w-360 px-6",
                    "flex flex-col gap-14",
                    "3xl:px-0 lg:px-20",
                )}
            >
                <FooterTop />
                <FooterBottom />
            </div>
        </footer>
    )
}
