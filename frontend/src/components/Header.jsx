import React, { useContext } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { IsAdminContext } from '../App'

export default function Header() {

  const authentication = useContext(IsAdminContext)

  const menuToggler = () => {
    document.querySelector('nav').classList.toggle('active')
    document.querySelector('.toggler').classList.toggle('active')
  }
  return (
    <header>
      <Link className="logo" to='/'>.Gardening</Link>
      <div className="toggler" onClick={menuToggler}>
          <FiChevronDown size='24px'/>
        </div>
      <nav>
        <ul>
            <Link to='/' onClick={menuToggler}>Home</Link>
            <Link to='/blog' onClick={menuToggler}>Blog</Link>
            <Link to='/about' onClick={menuToggler}>About Me</Link>
            <Link to='/contact' onClick={menuToggler}>Contact Me</Link>
            {!authentication.isAdmin ? '' :
              <Link to='/admin' onClick={menuToggler}>Admin</Link>
            }
        </ul>
      </nav>
    </header>
  )
}
