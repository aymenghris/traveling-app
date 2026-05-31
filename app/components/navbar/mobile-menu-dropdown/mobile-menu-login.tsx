import Button from "@/components/Button"
import { IMAGES } from "@/constants"

export const MobileMenuLogin = () => {
    return (
        <div className="pt-8">
            <Button
                type="button"
                title="login"
                icon={IMAGES.navbar.user}
                variant="c-btn-dark-green"
            />
        </div>
    )
}
