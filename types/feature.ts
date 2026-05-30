import type { ImageProps } from 'next/image'

export interface Feature {
    title: string
    icon: ImageProps['src']
    alt: string
    description: string
}