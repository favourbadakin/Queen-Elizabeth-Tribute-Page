import React from 'react';
import nav from '../assets/nav-logo.png';
import eliza from '../assets/eliza.png';
import logo from '../assets/header-logo.png';

const Header = () => {
  return (
    <header className='text-primary'>
        <nav className='bg-secondary bg-hero-image bg-cover flex md:flex-row justify-between py-3 px-4 md:px-20 md:py-4'>
            <img src={nav} alt='logo' />
            <ul className='hidden md:flex items-center gap-x-4'>
                <li className='opacity-50 hover:opacity-100'><a href='/#'>Home</a></li>
                <li className='opacity-50 hover:opacity-100'><a href='/#'>Biography</a></li>
                <li className='opacity-50 hover:opacity-100'><a href='/#'>Timeline</a></li>
                <li className='opacity-50 hover:opacity-100'><a href='/#'>Gallery</a></li>
                <li className='opacity-50 hover:opacity-100'><a href='/#'>Tributes</a></li>
                <li><button className='border border-primary px-4 py-2 hover:bg-primary hover:text-secondary'><a href='/#'>Write Tribute</a></button></li>
            </ul>
        </nav>
        <div className='bg-hero-image bg-no-repeat bg-cover flex flex-col md:flex-row justify-between bg-secondary px-4 md:px-20'>
            <div className='w-80 m-auto md:w-[32.6rem]'>
                <img className='mx-auto hidden md:block' src={logo} alt='logo' />
                <h1 className='cabinet text-xl text-center mt-3 mb-2 md:text-left sm:text-3xl md:text-4xl lg:text-5xl'>QUEEN ELIZABETH II</h1>
                <p className='italic opacity-50 tracking-wide'>"I have in sincerity pledged myself to your service, as so many of you are pledged to mine. Throughout all my life and with all my heart I shall strive to be worthy of your trust."</p>
                <p className='text-right mt-2'>- Queen Elizabeth Alexandra Mary Windsor</p>
                <p className='text-right opacity-50'>21 April 1926 - 8 September 2022</p>
            </div>
            <div className='order-first md:order-last my-4 md:my-0'>
                <img src={eliza} alt='queen' />
            </div>
        </div>
    </header>
  )
}

export default Header