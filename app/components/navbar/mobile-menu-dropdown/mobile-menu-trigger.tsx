import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SheetTrigger } from "@/components/ui/sheet"

export const MobileMenuTrigger = () => {
    return (
        <SheetTrigger asChild>
            <Button variant="ghost" size="icon-lg" className="lg:hidden">
                <MenuIcon className="size-6" />
            </Button>
        </SheetTrigger>
    )
}
