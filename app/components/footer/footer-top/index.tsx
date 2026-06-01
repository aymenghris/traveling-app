import { FooterBrand } from "./footer-brand"
import { FooterContactInfo } from "./footer-contact-info"
import { FooterNavLinks } from "./footer-nav-links"
import { FooterSocialLinks } from "./footer-social-links"

export const FooterTop = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <FooterBrand />

            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                <FooterNavLinks />
                <FooterContactInfo />
                <FooterSocialLinks />
            </div>
        </div>
    )
}
