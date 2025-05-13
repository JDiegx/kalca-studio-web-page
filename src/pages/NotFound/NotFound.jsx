import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full h-[600px] flex flex-col items-center justify-center'>
        <h2 className='text-[37px] font-bold' >404 - NotFound</h2>
        <p className='text-[15px] mt-[-5px] '>Sorry, Website under construction.</p>
        <Link to="/" className='text-[18px] underline underline-offset-2 mt-[20px]'> Back to Home</Link>
    </div>
  )
}

export default NotFound