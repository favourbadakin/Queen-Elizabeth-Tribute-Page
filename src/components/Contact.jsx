import React, { useState } from 'react';
import { db } from '../lib/firebase';

const Contact = () => {
const [name, setName] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');


const handleSubmit = (e) => {

    e.preventDefault();
    db.collection('contacts')
.add({
        name: name,
        subject: subject,
        message: message,
    })
    .then(()=>{
        console.log('submitted')
    })
    .catch( error=> {
        console.log(error.message);
    })
    setName('');
    setSubject('');
    setMessage('');
}

  return (  
    <section className='bg-hero-image font-medium px-4  md:px-[11rem] pb-8 text-secondary pt-10' id='write'>
        <div className='text-center mt-6 mb-6 lg:text-left '>
            <h2 className='uppercase mb-2 font-bold text-xl md:text-4xl lg:text-5xl'>Write Tributes</h2>
            <p className='text-sm'>Send some words of condolence to the Royal Fami!y</p>
        </div>
        <div className='flex gap-8'>
            <div className='w-full'>
                <form className='max-w-4xl' onSubmit={handleSubmit}>
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Name' className='mr-7 font-semibold'>Name</label>
                        <input className='border p-3 focus:outline-none focus:border-primary w-full' id='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    {/* <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Email' className='mr-8 font-semibold'>Email</label>
                        <input className='border p-3 focus:outline-none focus:border-primary w-full' id='Email'></input>
                    </div> */}
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Subject' className='mr-4 font-semibold'>Subject</label>
                        <input className='border p-3 focus:outline-none focus:border-primary w-full' id='Subject' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                    </div>
                    <div className='md:flex justify-between'>
                        <label htmlFor='Message' className='mr-2 font-semibold'>Message</label>
                        <textarea className='border p-3 focus:outline-none focus:border-primary w-full h-48' id='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className='mt-4 md:ml-[4.5rem] grid place-items-center'>
                        <button href='/#' className='border mx-auto w-40 border-color-secondary px-8 py-4 inline-block hover:text-primary hover:bg-hero-image hover:bg-secondary'>Send</button>
                    </div>
                </form>
            </div>
        </div>
        </section>
  )
}

export default Contact