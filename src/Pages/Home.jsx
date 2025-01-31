import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

function Home() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
   alert('Welcome to the page')
  }, [])

    useEffect(() => {
     alert('The count is: ' + count)
    }, [count])
  
  return (
    <>
      <h1 className='text-4xl text-center pt-10 font-bold'>
        Learning About React Hooks - useState
      </h1>

      <div className='flex flex-col items-center mt-10 h-screen text-2xl'>
        <p className='count  bg-amber-100 text-black px-5 rounded-3xl py-6'>
          The count set on the state is: <span className='text-white  px-8 bg-black '>{count}</span>. <br />
          setCount is a function that will update the state <br /> </p>

        <div className='flex space-x-5 pt-5'>
          {/* button to increment the count */}
          <button className='bg-black text-white px-5  py-2 rounded-xl' onClick={() => setCount(count + 1)}>Increment</button>

          {/* button to decrement the count */}

          <button className='bg-black text-white px-5 py-2 rounded-xl' onClick={() => setCount(count - 1)}>Decrement</button>
          {/* button to reset the count */}
          <button className='bg-black text-white px-5 py-2 rounded-xl' onClick={() => setCount(0)}>Reset</button>

        </div>

      </div>
      < Footer/>
    </>
  )
}

export default Home
