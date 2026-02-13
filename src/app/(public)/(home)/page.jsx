import ContentBanner from '@/components/content-banner/page'
import FunFactPage from '@/components/fun-fact/page'
import HeroBanner from '@/components/hero-banner/pages'
import Rooms from '@/components/rooms/pages'
import ServiceSection from '@/components/services/page'
import TestimonialPage from '@/components/testimonials/page'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <HeroBanner />
            <ContentBanner />
            <Rooms />
            <ServiceSection />
            <FunFactPage />
            <TestimonialPage />
        </div>
    )
}

export default HomePage