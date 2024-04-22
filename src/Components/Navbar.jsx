import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>      
        
        <nav>
            <ul>

                <li><NavLink to='/'> Home</NavLink></li>
                <li><NavLink to='/Experiencie'> Experiencie</NavLink></li>
                <li><NavLink to='/Skills'> Skills</NavLink></li>
                <li><NavLink to='/About'> About me</NavLink></li>

              

            </ul>
        </nav>
           

    </div>
  )
}

export default Navbar
