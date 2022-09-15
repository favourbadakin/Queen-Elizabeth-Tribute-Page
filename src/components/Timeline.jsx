import React from 'react';
import img1 from '../assets/pic1.png';
import img2 from '../assets/pic7.png';
import img3 from '../assets/pic8.png';

const Timeline = () => {
  return (
    <section className='px-4 md:px-[11rem]' id='timeline'>
        <div>
            <div>
                <h2 className='uppercase font-bold md:text-4xl text-center lg:text-left lg:text-5xl'>Timeline</h2>
                <p className='text-sm mt-2 text-center lg:text-left mb-6'>Key dates in the life of the Queen, from her birth in April 1926 to her death in September 2022</p>
            </div>
            <div>

            </div>
        </div>
        <div className='grid gap-y-8 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-6'>
            <div className='border-x p-4'>
                <img src={img1} className='w-full' alt='eliza' />
                <div className='flex flex-col lg:mt-3 lg:text-2xl lg:flex-row gap-x-4'>
                    <h3 className='font-bold text-center lg:text-left my-3 lg:my-0 text-xl lg:text-2xl'>1926</h3>
                    <p className='text-sm leading-6'>On the 21st of April, 1926, Princess Elizabeth Alexandra Mary Windsor is born at 2.40am at 17 Bruton Street, London, her maternal grandparents’ house. It was home to her parents, Elizabeth and Albert, Duke of York, the second son of King George V and Queen Mary. She was third in line to the throne behind her father and Edward, Prince of Wales.</p>
                </div>
            </div>
            <div className='border-x p-4'>
                <img src={img2} className='w-full' alt='eliza' />
                <div className='flex flex-col lg:mt-3 lg:text-2xl lg:flex-row gap-x-4'>
                    <h3 className='font-bold text-center lg:text-left my-3 lg:my-0 text-xl lg:text-2xl'>1930s</h3>
                    <p className='text-sm leading-6'>In August 1930, Elizabeth's sister, Princess Margaret Rose, is born. On the 20th of January 1936, George V dies. Edward VIII becomes king.  On the 10th of December 1936, Edward VIII abdicates so that he can marry the American divorcee Wallis Simpson.
In 1937, Elizabeth becomes a Girl Guide at the age of 11.</p>
                   </div>
            </div>
            <div className='border-x p-4'>
                <img src={img3} className='w-full' alt='eliza' />
                <div className='flex flex-col lg:mt-3 lg:text-2xl lg:flex-row gap-x-4'>
                    <h3 className='font-bold text-center lg:text-left my-3 lg:my-0 text-xl lg:text-2xl'>1940s</h3>
                    <p className='text-sm leading-6'>On the 13th of October, 1940, Elizabeth makes her first broadcast to the nation. On the 21st of April 1942, on her 16th birthday, Elizabeth carries out her first public engagement when she inspects the Grenadier Guards, of which she had been appointed colonel-in-chief. In 1944, she receives her first corgi, Susan, as an 18th birthday present.</p>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Timeline