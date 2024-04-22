import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>      
        
        <nav>
            <ul>
              
                <li><NavLink to='/Habilidades'> Conocimientos</NavLink></li>
                <li><NavLink to='/Experiencia'> Experiencia</NavLink></li>
                <li><NavLink to='/Proyectos'> Proyects</NavLink></li>
                <li><NavLink to='/About'> Sobre mi</NavLink></li>

              

            </ul>
        </nav>
           

    </div>
  )
}

export default Navbar
