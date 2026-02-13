'use client'

import React, { useState } from 'react'
import SectionTitle from '../section-title/page'

import serviceImg1 from '../../assets/resort_service_1.jpg'
import serviceImg2 from '../../assets/resort_service_2.jpg'
import serviceImg3 from '../../assets/resort_service_3.jpg'
import serviceImg4 from '../../assets/resort_service_4.jpg'
import serviceImg5 from '../../assets/resort_service_5.jpg'
import Image from 'next/image'

export const SERVIVE_DATA = [
    {
        id: 1,
        name: 'Michelin fine Restaurants',
        image: serviceImg1
    },
    {
        id: 2,
        name: 'Appointed Penthouses',
        image: serviceImg2
    },
    {
        id: 3,
        name: 'Spa and Wellness Sanctuary',
        image: serviceImg3
    },
    {
        id: 4,
        name: ' VIP Lounges and Amenities',
        image: serviceImg4
    },
    {
        id: 5,
        name: 'Event and Conference',
        image: serviceImg5
    }
]

const ServiceSection = () => {
    const [activeService, setActiveService] = useState(SERVIVE_DATA[0]);
    return (
        <div className='w-full pt-36'>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-x-20 items-center">
                    <div className=''>
                        <SectionTitle title="Core Services" subTitle="Services" customFont={'custom-font'} className="items-start gap-y-5" titleCss="relative uppercase not-italic flex items-center gap-x-5 before:content-[''] before:w-14 before:h-[1px] before:bg-primary before:flex" dualText />

                        <ul className='flex flex-col gap-y-5'>
                            {SERVIVE_DATA.map((data, index) => (
                                <li key={data.id}>
                                    <p className={`text-4xl font-regular custom-font border-b-[1px] border-b-primary/30 pb-8 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary ${activeService.id === data.id ? 'text-primary' : 'text-white'}`}
                                        onClick={() => setActiveService(data)}
                                    >
                                        <span className='text-4xl'>{(index + 1).toString().padStart(1)} </span>
                                        / {data.name}

                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <Image src={activeService.image} alt={activeService.name} className='h-[80vh] object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection