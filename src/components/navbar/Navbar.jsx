import React from 'react'
import Toggle from '../toggle/Toggle'
import './Navbar.css'
import Logo from '../../image/Logo.svg'
import { Link } from 'react-scroll'


// import Logo from '../../image/logo.svg'
// for iporting logo and anchor link
// import Index from '../../App.js' 


const Navbar = () => {
  return (
    <div className="nav-wrapper">
        <div className="nav-left">
            <div className="logo">
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <img src={Logo} alt="" />
                </Link>
                {/* <span>Sanjeev Ghosh</span> */}
            </div>
            <Toggle />
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Work' smooth={true}>
                    <li>Work</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true} >
                    <li>Contact Me</li>
                    </Link>
                </ul>
            </div>
            <button className="nav-btn btn">Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar