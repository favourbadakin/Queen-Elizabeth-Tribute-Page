import React from 'react'

const Contact = () => {
  return ( 
    <section className='font-medium mx-6 md:mx-20 pb-4 text-secondary lg:h-screen pt-6' id='write'>
        <div className='text-center mt-6 mb-6 md:text-4xl  lg:text-left lg:text-5xl'>
            <h2 className='uppercase font-bold text-2xl md:text-4xl mb-2'>Write Tribute</h2>
            <p className='text-sm'>Write your tribute</p>
        </div>
        <div className='flex gap-8'>
            <div className='w-full'>
                <form className='max-w-4xl'>
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Name' className='mr-7 font-semibold'>Name</label>
                        <input className='border p-3 focus:outline-none focus:border-[#1DA1F2] w-full' id='Name'></input>
                    </div>
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Email' className='mr-8 font-semibold'>Email</label>
                        <input className='border p-3 focus:outline-none focus:border-[#1DA1F2] w-full' id='Email'></input>
                    </div>
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Subject' className='mr-4 font-semibold'>Subject</label>
                        <input className='border p-3 focus:outline-none focus:border-[#1DA1F2] w-full' id='Subject'></input>
                    </div>
                    <div className='md:flex justify-between'>
                        <label htmlFor='Message' className='mr-2 font-semibold'>Message</label>
                        <textarea className='border p-3 focus:outline-none focus:border-[#1DA1F2] w-full h-48' id='Message'></textarea>
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