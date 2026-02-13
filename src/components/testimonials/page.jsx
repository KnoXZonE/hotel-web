import React from 'react'
import TestmonialCard from './testmonial-card'

import userImage from '../../assets/testimonial_1.jpg'

export const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: 'Steven k. Roberts',
        location: 'USA',
        message: 'Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.',
        userImage: userImage
    },
    {
        id: 2,
        name: 'Sourav Gurung',
        location: 'Nepal',
        message: 'Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.',
        userImage: userImage
    },
    {
        id: 3,
        name: 'Anita Sharma',
        location: 'India',
        message: 'Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.',
        userImage: userImage
    }
]

const TestimonialPage = () => {
    return (
        <div className='w-full pt-36'>
            <div className="container mx-auto">
                <TestmonialCard />
            </div>
        </div>
    )
}

export default TestimonialPage