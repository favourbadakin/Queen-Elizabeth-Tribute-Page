import React from 'react';
import logo from '../assets/nav-logo.png';

const Footer = () => {
  return (
    <footer className='bg-secondary bg-hero-image py-4 text-primary text-center'>
             <hr className='opacity-60' />
            <div className='grid place-items-center mt-4'>
                <img src={logo} alt='logo' />
               <h3 className='cabinet uppercase mt-4 font-medium text-xl'>Queen Elizabeth alexandra mary windsor</h3>
               <div className='pt-2 pb-10'><span className='opacity-50 italic'>Forever in our hearts</span><span>🕊️❤️</span></div>
            </div>
            <p className='text-xs'><a className='' href='https://www.twitter.com/fav_bdk'><span className='opacity-50 hover:opacity-100 mb-6'>Developed with love by <span className='border-b pb-1'>Favour</span></span><span>⚡</span></a></p>
    </footer>
  )
}

export default Footer