import React from 'react'
import { NavLink } from 'react-router-dom'
import Toggle from './Toggle'

function Navbar({dark}) {
  return (
    <div  className={` header ${dark ? 'dark-mode' : 'light-mode'}`}>      
        
        <nav>
            <ul>

                <li><NavLink to='/'> Home</NavLink></li>
                <li><NavLink to='https://drive.google.com/file/d/1g6pZCuBloSlGFpWNABPNWg7jQSn7hjin/view' target="_blank">Curriculum</NavLink></li>
                <li><NavLink to='/Experiencie'> Experiencie</NavLink></li>
                <li><NavLink to='/Skills'> Skills</NavLink></li>
                <li><NavLink to='/About'> Profile</NavLink></li> 
                <li><NavLink to='/Contact'> Contact</NavLink></li>
                <li><Toggle/></li>
                
              
            

              

            </ul>
        </nav>
           

    </div>
  )
}

export default Navbar
