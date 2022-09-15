import React from 'react';
import logo from '../assets/nav-logo.png';

const Footer = () => {
  return (
    <footer className='bg-secondary bg-hero-image pt-4 text-primary text-center'>
             <hr className='opacity-60' />
            <div className='grid place-items-center mt-4'>
                <img src={logo} alt='logo' />
               <h3 className='cabinet uppercase mt-4 font-medium text-xl'>Queen Elizabeth alexandra mary windsor</h3>
               <div className='pt-2 pb-10'><span className='opacity-50 italic'>Forever in our hearts</span><span>🕊️❤️</span></div>
            </div>
    </footer>
  )
}

export default Footer