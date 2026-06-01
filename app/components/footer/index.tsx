import { FooterBottom } from "./footer-bottom"
import { FooterTop } from "./footer-top"

export const Footer = () => {
    return (
        <footer className="c-flex-center mb-24">
            <div className="c-max-container c-padding-container flex w-full flex-col gap-14">
                <FooterTop />
                <FooterBottom />
            </div>
        </footer>
    )
}
