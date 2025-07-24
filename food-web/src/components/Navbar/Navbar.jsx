import React from 'react'
import './Navbar'
import assets from './assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
    </div>
  )
}

export default Navbar
