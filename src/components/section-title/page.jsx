import React from 'react'

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='flex flex-col items-center mb-16'>
            <p className='italic text-primary font-medium custom-font text-lg'>{subTitle}</p>
            <h2 className='custom-font text-6xl text-primary'>{title}</h2>
        </div>
    )
}

export default SectionTitle