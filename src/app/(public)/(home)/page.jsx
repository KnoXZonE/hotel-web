import ContentBanner from '@/components/content-banner/page'
import HeroBanner from '@/components/hero-banner/pages'
import Rooms from '@/components/rooms/pages'
import ServiceSection from '@/components/services/page'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <HeroBanner />
            <ContentBanner />
            <Rooms />
            <ServiceSection />
        </div>
    )
}

export default HomePage