import Button from "@/components/Button"
import { IMAGES } from "@/constants"

export const LoginButton = () => (
    <div className="lg:c-flex-center hidden">
        <Button
            type="button"
            title="login"
            icon={IMAGES.navbar.user}
            variant="c-btn-dark-green"
        />
    </div>
)
