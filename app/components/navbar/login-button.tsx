import { User2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const LoginButton = () => (
    <div className="max-lg:hidden">
        <Button variant="dark-green" size="lg">
            <User2Icon className="size-6" />
            login
        </Button>
    </div>
)
