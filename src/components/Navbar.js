import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'



const Navbar = ({ authenticated, user, handleLogOut }) => {
    
    
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <div className = 'header'>
                <nav className='navigation'>
                        <ul className='list'>
                            <li className='navLinks'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className = "navLinks">
                                <Link  to={'/workout'}>
                                    Workouts
                                </Link>
                            </li>
                            <li className="navLinks">
                             <Link  onClick={handleLogOut} to="/">
                                     Sign Out
                                </Link>
                </li>
                        </ul>
                </nav>
            </div>
        )
    }
    let publicOptions = (

            <div className="header">
                <nav className='navigation'>
                    <ul className='list'>
                      <li className='navLinks'>
                          <Link to='/'> Home </Link>
                      </li>
                        <li className='navLinks'>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className="navLinks">
                            <Link to='/register'>Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>

    )
    return (
        <main>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </main>
    )
}

export default Navbar