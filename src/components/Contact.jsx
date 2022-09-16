import React from 'react';

const Contact = () => {
  return (  
    <section className='bg-hero-image font-medium px-4  md:px-[11rem] pb-8 text-secondary pt-10' id='write'>
        <div className='text-center mt-6 mb-6 lg:text-left '>
            <h2 className='uppercase mb-2 font-bold text-xl md:text-4xl lg:text-5xl'>Write Tributes</h2>
            <p className='text-sm'>Send some words of condolence to the Royal Fami!y</p>
        </div>
        <div className='flex gap-8'>
            <div className='w-full'>
                <form className='max-w-4xl'>
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Name' className='mr-7 font-semibold'>Name</label>
                        <input className='border p-3 focus:outline-none focus:border-primary w-full' id='Name'></input>
                    </div>
                    {/* <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Email' className='mr-8 font-semibold'>Email</label>
                        <input className='border p-3 focus:outline-none focus:border-primary w-full' id='Email'></input>
                    </div> */}
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Subject' className='mr-4 font-semibold'>Subject</label>
                        <input className='border p-3 focus:outline-none focus:border-primary w-full' id='Subject'></input>
                    </div>
                    <div className='md:flex justify-between'>
                        <label htmlFor='Message' className='mr-2 font-semibold'>Message</label>
                        <textarea className='border p-3 focus:outline-none focus:border-primary w-full h-48' id='Message'></textarea>
                    </div>
                    <div className='mt-4 md:ml-[4.5rem] grid place-items-center'>
                        <button href='/#' className='border mx-auto w-40 border-color-secondary px-8 py-4 inline-block hover:text-primary hover:bg-secondary'>Send</button>
                    </div>
                </form>
            </div>
        </div>
        </section>
  )
}

export default Contact