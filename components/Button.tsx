import { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface ButtonProps {
    type: 'button' | 'submit'
    title: string
    icon?: string
    variant:
        | 'c-btn-dark-green'
        | 'c-btn-dark-green-outline'
        | 'c-btn-green'
        | 'c-btn-white-text'
        | 'c-btn-white'
    full?: boolean
}

const Button: FC<ButtonProps> = ({ type, title, icon, variant, full }) => {
    return (
        <button
            type={type}
            className={clsx(
                'c-flex-center gap-3 rounded-full',
                variant,
                full && 'w-full'
            )}
        >
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="c-bold-16 cursor-pointer whitespace-nowrap">
                {title}
            </label>
        </button>
    )
}

export default Button
