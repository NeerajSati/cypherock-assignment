import React from 'react'
import './navbar.css'
import logo from '../../images/logo.svg';
import minimize from '../../images/minimize.svg';
import close from '../../images/close.svg';
import down from '../../images/down.svg';
function Navbar() {
  return (
    <div className='navbar'>
    <div className='navLeft'>
    <div className='logo'><img src={logo} alt="logo" className='navIcon'></img></div>
    </div>
    <div className='navRight'>
    <div className='logo'>
    <img src={down} alt="down" className='navIcon'></img>
    <img src={minimize} alt="minimize" className='navIcon'></img>
    <img src={close} alt="close" className='navIcon'></img>
    </div>
    </div>
    </div>
  )
}

export default Navbar