'use client'

import Image from 'next/image'

const Navbar = () =>{
    return (
        <div className="flex flex-row items-center justify-between px-6 h-fit py-4 border-b border-white/20">
            <div className="relative h-20 w-20">
                <Image src={'/images/logo.svg'} fill alt='logo' className='object-cover' />
            </div>
            <div className='flex items-center justify-center border border-white rounded-full px-5 py-3 hover:cursor-pointer hover:opacity-80'>
                XEROCODEE
            </div>  
        </div>
    )
}

export default Navbar