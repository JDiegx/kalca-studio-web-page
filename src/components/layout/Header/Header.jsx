import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full h-16 bg-white flex justify-center items-center z-10 sticky top-0 '>
      <Link to={"/"}>
        <img src="/img/kalca-black-logo.png" className='w-24' alt="Logo of Kalca Studio" />
      </Link>
    </header>
  )
}

export default Header