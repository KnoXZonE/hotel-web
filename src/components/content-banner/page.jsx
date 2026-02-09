import Image from 'next/image'
import React from 'react'
import AboutImg from '@/assets/about2.jpg'
import ExcusineImg from '@/assets/signature.png'

const ContentBanner = () => {
    return (
        <div className='w-full pt-36'>
            <div className='container mx-auto'>
                <div className='flex items-center gap-x-20'>
                    <div className='flex-1'>
                        <Image src={AboutImg} alt="Exusine hotel" />
                    </div>

                    <div className='flex-1 flex flex-col gap-y-5'>
                        <p className='text-primary text-xl uppercase flex items-center gap-x-3'>
                            <span className='inline w-14 h-[1px] bg-primary'></span>
                            Welcome
                        </p>
                        <h2 className='custom-font text-7xl font-medium'>
                            Experience the Pinnacle of Luxury at
                            <span className='text-primary'>&quot;Excusine hotel&quot;</span>
                        </h2>
                        <p>Welcome to our resort, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds and leaves you with unforgettable memories.</p>
                        <p>Lorem to our hotel, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that.</p>
                        <Image src={ExcusineImg} alt="hotel Signature" className='mt-10' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentBanner