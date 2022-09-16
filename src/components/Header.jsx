import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import navp from '../assets/nav-logo.png';
import eliza from '../assets/eliza.png';
import logo from '../assets/header-logo.png';


const Header = () => {

 const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }
   

  return (
    <header className='text-primary'>
        <nav className='bg-secondary bg-hero-image bg-cover drop-shadow-[0px_2px_12px_rgba(231,232,233,0.04)] flex md:flex-row justify-between py-3 px-4 md:px-20 md:py-4'>
            <img src={navp} alt='logo' />
            <ul className='hidden lg:flex items-center gap-x-4'>
                <li className='opacity-50 hover:opacity-100'><a href='/#'>Home</a></li>
                <li className='opacity-50 hover:opacity-100'><a href='#biography'>Biography</a></li>
                <li className='opacity-50 hover:opacity-100'><a href='#timeline'>Timeline</a></li>
                <li className='opacity-50 hover:opacity-100'><a href='/#'>Gallery</a></li>
                <li className='opacity-50 hover:opacity-100'><a href='#tributes'>Tributes</a></li>
                <li><button className='border border-primary px-4 py-2 hover:bg-primary hover:text-secondary'><a href='#write'>Write Tribute</a></button></li>
            </ul>
            <div className='lg:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-10' />:<XIcon className='w-10' />}
                {/* <MenuIcon className='w-8'/> */}
            </div>
            <ul className={!nav ? 'hidden' :'absolute h-screen overflow-hidden  drop-shadow-[0px_2px_12px_rgba(231,232,233,0.04)] top-[4.1rem] left-0 bg-secondary bg-hero-image w-full pt-[30%] sm:pt-0 mx-auto'}>
                <li className='text-center py-2 opacity-50 hover:opacity-100' onClick={handleClick}><a href='/#'>Home</a></li>
                <li className='text-center mb-2 opacity-50 hover:opacity-100' onClick={handleClick}><a href='#biography'>Biography</a></li>
                <li className='text-center mb-2 opacity-50 hover:opacity-100' onClick={handleClick}><a href='#timeline'>Timeline</a></li>
                <li className='text-center mb-2 opacity-50 hover:opacity-100' onClick={handleClick}><a href='/#'>Gallery</a></li>
                <li className='text-center mb-2 opacity-50 hover:opacity-100' onClick={handleClick}><a href='#tributes'>Tributes</a></li>
                <div className='w-full grid place-items-center'>
                <div className='flex flex-col my-2'>
                    
                    <button className='border border-primary px-4 py-2 hover:bg-primary hover:text-secondary' onClick={handleClick}><a href='#write'>Write Tributes</a></button>
                    <img className='mx-auto mt-[50%] sm:mt-4' src={navp} alt='logo' />
                </div></div>
            </ul>
        </nav>
        <div className='bg-hero-image bg-no-repeat bg-cover flex flex-col md:flex-row justify-between bg-secondary px-4 md:px-20'>
            <div className='w-80 m-auto md:w-[32.6rem]'>
                <img className='mx-auto hidden md:block' src={logo} alt='logo' />
                <h1 className='cabinet text-xl text-center mt-3 mb-2 md:text-left sm:text-3xl md:text-4xl lg:text-5xl'>QUEEN ELIZABETH II</h1>
                <p className='italic text-[rgba(231,232,233,.5)] tracking-wide'>"I have in sincerity pledged myself to your service, as so many of you are pledged to mine. Throughout all my life and with all my heart I shall strive to be worthy of your trust."</p>
                <p className='text-right mt-2'>- Queen Elizabeth Alexandra Mary Windsor</p>
                <p className='text-right text-[rgba(231,232,233,.5)]'>21 April 1926 - 8 September 2022</p>
            </div>
            <div className='order-first md:order-last my-4 md:my-0'>
                <img src={eliza} alt='queen' />
            </div>
        </div>
    </header>
  )
}

export default Header