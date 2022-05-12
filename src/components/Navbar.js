import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


const Navbar = ({ authenticated, user, handleLogOut }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth)
      }
      window.addEventListener('resize', changeWidth)
  
      // cleanup function //
      return () => {
        window.removeEventListener('resize', changeWidth)
      }
    }, [])

    
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <div className = 'header'>
                <nav className='navigation'>
                    {(toggleMenu || screenWidth > 900) && (
                        <ul className='list'>
                            <li className='navLinks'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className = "navLinks">
                                <Link className='navLinks' to={'/workout'}>
                                    Workouts
                                </Link>
                            </li>
                            <li className="navLinks">
                             <Link className="navLinks" onClick={handleLogOut} to="/">
                                     Sign Out
                                </Link>
                </li>
                        </ul>
                    )}
                </nav>
            </div>
        )
    }
    let publicOptions = (
        <header>
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
        </header>
    )
    return (
        <header>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </header>
    )
}

export default Navbar