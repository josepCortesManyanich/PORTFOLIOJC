import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext' 
import { Menu } from '@headlessui/react'

function Navbar() {
  const { white, toggleTheme } = useTheme(); 



  return (
    <div className={`header ${white ? 'light-mode' : 'dark-mode'}`}>
         
         <Menu>
          <div className='menu-wrapper'>
            <Menu.Button className={`navbar-button ${white ? 'light-mode' : 'dark-mode'}`}>MENÚ</Menu.Button>
            <Menu.Items anchor="bottom" className={`menu-box ${white ? 'light-mode' : 'dark-mode'}`}>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`} >
                <NavLink to="/"> Home</NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to="/About"> About </NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to="/Projects"> Projects</NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to="/Skills"> Skills</NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to="/Experience"> Experience</NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item1 ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to='https://drive.google.com/file/d/1g6pZCuBloSlGFpWNABPNWg7jQSn7hjin/view' target="_blank">CV</NavLink>
              </Menu.Item>
            </Menu.Items>
          </div>
        </Menu>
 
  
      <label class="switch">
            <input type="checkbox"
             onChange={toggleTheme}/>
            <span class="slider"></span>
      </label>
          
    </div>
  );
}

export default Navbar;
