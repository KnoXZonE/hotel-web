'use client'

import Logo from '@/assets/logo.png'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleSticky = () => {
            setIsSticky(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleSticky);

        return () => window.removeEventListener('scroll', handleSticky);
    }, [])
    return (
        <header className={`fixed top-0 left-0 w-full z-20 py-5 px-10 border-b border-primary/30 transition-all duration-300 ease-in-out ${isSticky ? '-translate-y-[100%]' : 'block'}`}>
            <div className="flex items-center justify-between relative">
                <div className=''>
                    <button className=''>
                        <Menu className='text-primary' />
                    </button>
                </div>

                <div className='absolute left-1/2 -translate-x-1/2'>
                    <Link href="/">
                        <Image src={Logo} alt="logo" className='w-32 object-contain h-full' />
                    </Link>
                </div>

                <div className="">
                    <button className='border border-transparent bg-primary py-2 px-5 uppercase text-md text-black font-medium transition-all duration-300 ease-in-out hover:bg-transparent hover:text-primary hover:border-primary/20'>Book Now</button>
                </div>
            </div>
        </header>
    )
}

export default Header