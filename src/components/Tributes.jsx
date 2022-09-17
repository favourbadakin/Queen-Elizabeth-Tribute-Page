import React , { useEffect } from 'react';
import buhari from '../assets/buhari.png';
import macron from '../assets/macron.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Tributes = () => {

 useEffect( () => {
    Aos.init({duration: 3000});
},[]);

  return (
    <section className='bg-secondary bg-hero-image text-primary bg-cover pt-8 pb-6 px-4 md:px-[11rem]' id='tributes'>
        <div>
            <h2 className='font-bold md:text-4xl text-center lg:text-left lg:text-5xl'>TRIBUTES</h2>
            <p className='mt-2 mb-5 text-center md:text-left opacity-50'>World leaders pay tribute to Queen Elizabeth II</p>
        </div>
        <div className='flex flex-col md:gap-x-14 md:flex-row'>
            <div className='md:w-[40%] lg:w-full mb-4'>
                <div className='flex flex-col xl:flex-row gap-x-6'>
                    <img src={buhari} data-aos='fade-down' className='object-contain sm:object-cover' alt='president'/>
                    <p className='md:w-64 mt-3 xl:mt-0 opacity-50 text-center md:text-left text-sm'>"The story of modern Nigeria will never be complete without a chapter on Queen Elizabeth ll, a towering global personality and an outstanding leader. She dedicated her life to making her nation, the Commonwealth and the entire world a better place.”</p>
                </div>
                <div className='text-center xl:text-left'>
                    <h3 className='uppercase my-2 font-medium'>muhammadu Buhari</h3>
                    <p className='opacity-50 text-sm italic'>President of Nigeria</p>
                </div>
            </div>
            <hr className='text-primary opacity-20 py-4'/>
            <div className='md:w-[40%] lg:w-full'>
                <div className='flex flex-col xl:flex-row gap-x-6'>
                    <img src={macron} data-aos='fade-up' className='object-contain sm:object-cover h-full' alt='president'/>
                    <p className='md:w-64 mt-3 xl:mt-0 opacity-50 text-center md:text-left text-sm'>“Her Majesty Queen Elizabeth II embodied the British nation's continuity and unity for over 70 years. I remember her as a friend of France, a kind-hearted queen who has left a lasting impression on her country and her century.”</p>
                </div>
                <div className='text-center lg:text-left'>
                    <h3 className='uppercase my-2 font-medium'>Emmanuel Macron</h3>
                    <p className='opacity-50 text-sm italic font-medium'>President of France</p>
                </div>
            </div>
            </div>
        
    </section>
  )
}

export default Tributes