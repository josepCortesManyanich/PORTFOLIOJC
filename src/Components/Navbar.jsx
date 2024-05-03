import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext' 


function Navbar() {
  const { white, toggleTheme } = useTheme(); 
 


  return (
    <div className={`header ${white ? 'light-mode' : 'dark-mode'}`}>
         
      <nav >
        <ul>
          <li><NavLink to="/"> Home</NavLink></li>
          <li><NavLink to="/About"> About </NavLink></li>
          <li><NavLink to="/Projects"> Projects</NavLink></li>
          <li><NavLink to="/Skills"> Skills</NavLink></li>
          <li><NavLink to="/Experience"> Experience</NavLink></li>
          <li><NavLink to='https://drive.google.com/file/d/1g6pZCuBloSlGFpWNABPNWg7jQSn7hjin/view' target="_blank">Curriculum</NavLink></li>
        
        </ul>
      </nav>
  
      <label class="switch">
            <input type="checkbox"
             onChange={toggleTheme}/>
            <span class="slider"></span>
      </label>
          
    </div>
  );
}

export default Navbar;
