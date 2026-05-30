type GuideInfoItemProps = {
    label: string
    value: string
    meta?: string
    nowrap?: boolean
}

export const GuideInfoItem = ({
    label,
    value,
    meta,
    nowrap = false,
}: GuideInfoItemProps) => {
    return (
        <div className="flex w-full flex-col">
            <div className="c-flex-between w-full">
                <p className="c-regular-16 text-gray-20">{label}</p>
                {meta && <p className="c-bold-16 text-green-50">{meta}</p>}
            </div>

            <p
                className={`c-bold-20 mt-2 ${nowrap ? "whitespace-nowrap" : ""}`}
            >
                {value}
            </p>
        </div>
    )
}