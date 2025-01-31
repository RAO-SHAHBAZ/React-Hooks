import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='bg-black text-white pb-5 flex justify-around pt-5 font-semibold  text-3xl'  >
      <div >
      <h1>Rao Shahbaz</h1>
      </div>
      <div >
        
      <Link className='px-4' to='/'>Home</Link>
      <Link className='px-4' to='/about'>About</Link>
      <Link className='px-4' to='/contact'>Contact</Link>
      </div>
      
    </div>
      
    </>
  )
}

export default Header
