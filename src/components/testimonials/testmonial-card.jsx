'use client'

import Image from 'next/image'
import React from 'react'
import { TESTIMONIALS_DATA } from './page'
import useEmblaCarousel from 'embla-carousel-react'

const TestmonialCard = () => {
    const [emblaRef] = useEmblaCarousel()
    return (
        <div className='embla'>
            <div className='overflow-hidden' ref={emblaRef}>
                <div className="flex touch-pan-y pinch-zoom">
                    {TESTIMONIALS_DATA.map(slide => (
                        <div key={slide.id} className="min-w-0 grow-0 shrink-0 basis-full">
                            <Image src={slide.userImage} alt={slide.name} />
                            <div className="testimonial-content">
                                <h3 className="testimonial-name">{slide.name}</h3>
                                <p className="testimonial-location">{slide.location}</p>
                                <p className="testimonial-message">{slide.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestmonialCard