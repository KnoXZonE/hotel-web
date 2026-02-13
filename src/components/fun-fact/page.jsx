import React from 'react'
import FunCard from './fun-card'

export const FUN_FACT_DATA = [
    { id: 1, name: 'Booking Month', value: 99 },
    { id: 2, name: 'Visitors daily', value: 130 },
    { id: 3, name: 'Positive feedbacks', value: 86 },
    { id: 4, name: 'Awards & honors', value: 23 },
]

const FunFactPage = () => {
    return (
        <div className='w-full pt-36'>
            <div className="container mx-auto">
                <div className='grid grid-cols-4 gap-20'>
                    {FUN_FACT_DATA.map((item, index) => (
                        <FunCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FunFactPage