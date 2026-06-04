import { GetAppContent } from "./get-app-content"
import { GetAppVisual } from "./get-app-visual"
import { GetAppWrapper } from "./get-app-wrapper"

export const GetApp = () => {
    return (
        <section className="flex w-full flex-col items-center justify-center pb-25">
            <GetAppWrapper>
                <GetAppContent />
                <GetAppVisual />
            </GetAppWrapper>
        </section>
    )
}
