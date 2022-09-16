import React from 'react';
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <figure className='flex items-center space-x-2'>
                <img src="assets/lottery.png" alt="lottery" className='w-20 h-20' />
                <div className=''>
                    <h1 className='text-lg font-bold text-white uppercase'>Ellion's Draw</h1>
                    <p className='text-xs truncate text-emerald-500'>User...</p>
                </div>
            </figure>
            <nav></nav>
        </header>
    )
}

export default Header;