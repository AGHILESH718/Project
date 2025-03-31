import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to='/'>Products</Link>
        <Link to='/Men'>Mens</Link>
        <Link to='/Women'>Women</Link>
    </div>
  )
}

export default Navbar