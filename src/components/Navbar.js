import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { links }  from '../data'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import  './navbar.css'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide__nav'}`}>
          {
            links.map(({index, name, path}) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}
                  onClick={() => setIsNavShowing(prev => !prev)} >{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <FaBars />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar