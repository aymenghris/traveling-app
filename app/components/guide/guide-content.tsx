type GuideContentProps = {
    title: string
    description: string
}

export const GuideContent = ({ title, description }: GuideContentProps) => {
    return (
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="c-bold-40 lg:c-bold-64 xl:max-w-[390px]">{title}</h2>

            <p className="c-regular-16 text-gray-30 xl:max-w-[520px]">
                {description}
            </p>
        </div>
    )
}