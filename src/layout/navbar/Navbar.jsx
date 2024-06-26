import React from 'react'
import Heads from '../../utilities/Heads'
import './Navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const tododata = useSelector((state) => state.userdata.value)
  return (
    <section id='navbar'>
        <div className='container'>
            <div className="navbar-contant-wrapper">
                <div className="navbar-logo-box">
                    <Heads text='TODO LIST' style='navbar-logo-style'/>
                </div>
                <div className="navabr-profile-box">
                    <div className="navbar-profile-image-box">
                        <img src={tododata && tododata. photoURL} alt="not found" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar