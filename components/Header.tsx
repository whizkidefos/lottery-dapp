import React from 'react';
import Image from 'next/image'
import NavButton from './NavButton';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <header className='grid items-center justify-between grid-cols-2 p-5 md:grid-cols-5'>
            <figure className='flex items-center space-x-2'>
                <img src="assets/lottery-white.png" alt="lottery" className='w-20 h-20' />
                <div className=''>
                    <h1 className='font-bold text-white uppercase text-md'>Ellison's Draw</h1>
                    <p className='text-xs truncate text-emerald-500'>User...</p>
                </div>
            </figure>
            <nav className='items-center justify-center hidden rounded-md md:flex md:col-span-3'>
                <div className='bg-[#0A1F1C] p-4 space-x-2'>
                    <NavButton isActive title='Buy Tickets' />
                    <NavButton title='Logout' />
                </div>
            </nav>

            <div className='flex flex-col ml-auto text-right'>
                <Bars3BottomRightIcon className='w-8 h-8 mx-auto text-white cursor-pointer' />
                <span className='md:hidden'>
                    <NavButton title='Logout' />
                </span>
            </div>
        </header>
    )
}

export default Header;