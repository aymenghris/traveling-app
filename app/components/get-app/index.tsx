import { GetAppContent } from "./get-app-content"
import { GetAppVisual } from "./get-app-visual"
import { GetAppWrapper } from "./get-app-wrapper"

export const GetApp = () => {
    return (
        <section className="c-flex-center w-full flex-col pb-[100px]">
            <GetAppWrapper>
                <GetAppContent />
                <GetAppVisual />
            </GetAppWrapper>
        </section>
    )
}
