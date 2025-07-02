import clsx from 'clsx'
import { CampSite } from '@/components/camp/CampSite'
import CampQuote from '@/components/camp/CampQuote'

export const Camp = () => {
    return (
        <section
            className={clsx(
                'flex flex-col',
                'relative py-10',
                '2xl:c-max-container lg:mb-10 lg:py-20 xl:mb-20'
            )}
        >
            <div
                className={clsx(
                    'flex items-start justify-start gap-8',
                    'h-[340px] w-full',
                    'lg:h-[480px] xl:h-[640px]',
                    'scrollbar-hidden overflow-x-auto'
                )}
            >
                <CampSite
                    backgroundImage="c-bg-img-campfire"
                    title="Last Chance Creek Camp"
                    subtitle="Plumas County, Califorina"
                    peopleJoined="50+ Joined"
                />
                <CampSite
                    backgroundImage="c-bg-img-tent"
                    title="Mountain View Camp"
                    subtitle="Somewhere in the Wilderness"
                    peopleJoined="50+ Joined"
                />
            </div>
            <CampQuote />
        </section>
    )
}
