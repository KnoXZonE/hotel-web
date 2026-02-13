'use client'

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const FunCard = ({ item, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <div ref={ref} className='flex flex-col gap-y-2'>
            <h2 className='text-7xl text-primary flex items-center'>
                <CountUp end={inView ? item.value : 0} duration={2} redraw={false}>
                    {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                <span className='text-5xl'>+</span>
            </h2>

            <div className='text-white text-2xl custom-font italic'>
                <span className='text-primary'>{(index + 1).toString().padStart(2, '0')} / </span>
                {item.name}
            </div>
        </div>
    )
}

export default FunCard