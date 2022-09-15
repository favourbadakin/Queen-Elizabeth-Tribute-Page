import React from 'react'

const Contact = () => {
  return (
    <section className='mx-6 md:mx-20 text-secondary lg:h-screen pt-6' id='contact'>
        <div className='text-center mt-6 mb-6'>
            <h2 className='font-bold text-2xl md:text-4xl mb-2'>Write Tribute</h2>
            <p>Write your tribute</p>
        </div>
        <div className='flex gap-8'>
            <div className='w-full'>
                <form className='max-w-full mx-auto'>
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
                    <div className='mt-4 md:ml-[4.5rem]'>
                        <button href='/#' className='border mx-auto w-40 border-color-secondary px-8 py-4 inline-block hover:text-primary hover:bg-secondary'>Send</button>
                    </div>
                </form>
            </div>
        </div>
        </section>
  )
}

export default Contact