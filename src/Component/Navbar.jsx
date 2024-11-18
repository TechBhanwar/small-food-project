import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="container">
        <div className="logo">
          <img src="images/Restaurant-Logo-Design-2-1180x664-removebg-preview.png" alt="" />
        </div>
        <div className="list">
          <ul>
          <li>
          <Link to="/" >Home</Link>
          </li>
          <li>
          <Link to="/" >Product</Link>
          </li>
          <li>
          <Link to="/" >Services</Link>
          </li>
          <li>
          <Link to="/about" >About</Link>
          </li>
          <li>
          <Link to="/contact" >Contact us</Link>
          </li>
          </ul>
        </div>
        <div className="icon">
          <button className='btn1'>login </button>
      
          <Link to="/cart">  <button className='btn1'>
        Cart
      </button></Link>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar