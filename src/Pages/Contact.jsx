import React from 'react'

function Contact() {
  return (
    <div >
     <form className='flex flex-col items-center justify-center ' >
        <input className='bg-black text-white mt-6 px-6 py-3' type="text" placeholder='Insert text' />
        <input className='bg-black text-white mt-6 px-6 py-3' type="color" />
        <input className='bg-black text-white mt-6 px-6 py-3' type="checkbox"/>
        <input className='bg-black text-white mt-6 px-6 py-3' type="date" />

     </form>
    </div>
  )
}

export default Contact
