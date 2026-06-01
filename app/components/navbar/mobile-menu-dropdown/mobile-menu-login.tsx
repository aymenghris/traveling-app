import { User2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const MobileMenuLogin = () => {
    return (
        <div className="pt-8">
            <Button variant="dark-green" size="md">
                <User2Icon className="size-5" />
                login
            </Button>
        </div>
    )
}
