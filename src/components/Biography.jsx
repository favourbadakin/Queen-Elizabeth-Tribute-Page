import React from 'react';
import img1 from '../assets/pic1.png';
import img2 from '../assets/pic2.png';
import img4 from '../assets/pic4.png';
import img3 from '../assets/pic3.png';

const Biography = () => {
  return (
    <section className='bg-hero-image px-4 my-8 md:mb-16 md:mt-10 md:px-[11rem]' id='biography'>
        <div>
            <h2 className='font-bold md:text-4xl text-center lg:text-left lg:text-5xl'>BIOGRAPHY</h2>
            <p className='text-sm mt-2 mb-6 text-center lg:text-left'>A short account of Queen Elizabeth II's Life</p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
            <div className='center'><img src={img1} className='w-full h-full object-cover' alt='eliz' /></div>
            <div className='lg:col-span-2'><img src={img2} className='w-full h-full object-cover' alt='eliz' /></div>
            <div className='lg:col-span-2 flex flex-col gap-y-16 md:gap-y-0 md:justify-between leading-5 text-xs md:text-sm lg:text-base'><p>Elizabeth Alexandra Mary Windsor was born in Mayfair, London, as the first child of the Duke &amp; Duchess of York (later King George VI and Queen Elizabeth). Her father acceded to the throne in 1936 upon the abdication of his brother, King Edward VIII, making Elizabeth the heir presumptive. She was educated privately at home and began to undertake public duties during the Second World War, serving in the Auxiliary Territorial Service.</p><p className='font-bold'><a href='https://en.wikipedia.org/wiki/Elizabeth_II' className='hover:underline'>Read more</a></p></div>
            <div><img src={img4} alt='eliz' className='w-full h-full object-cover' /></div>
            <div className='lg:col-span-2 flex flex-col justify-between text-xs md:text-sm leading-5 lg:text-base order-6 lg:order-5'><p>In November 1947, she married Philip Mountbatten, a former prince of Greece and Denmark, and their marriage lasted 73 years until his death in April 2021. They had four children: Charles III; Anne, Princess Royal; Prince Andrew, Duke of York; and Prince Edward, Earl of Wessex. Elizabeth II was Queen of the United Kingdom from 6 February 1952 until her death in 2022. Her reign of 70 years and 214 days was the longest of any British monarch and the second-longest recorded of any monarch of a sovereign country. At the time of her death, Elizabeth was also Queen of 14 other Commonwealth realms in addition to the United Kingdom.</p><p className='font-bold'><a href='https://en.wikipedia.org/wiki/Elizabeth_II' className='hover:underline'>Read more</a></p></div>
            <div className='lg:col-span-2 order-5 lg:order-6'><img src={img3} className='w-full h-full object-cover' alt='eliz' /></div>
        </div>
    </section>
  )
}

export default Biography