import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext' 
import { Menu } from '@headlessui/react'
import Hamburger from 'hamburger-react'
import {useState} from 'react'


function Navbar() {
  const { white, toggleTheme } = useTheme(); 
  const [isOpen, setOpen] = useState(false)



  return (
    <div className={`header ${white ? 'light-mode' : 'dark-mode'}`}>
         <div className='images-wrapper'>
          <ul className='images-list'>
            <li>
                <NavLink to='https://github.com/josepCortesManyanich'> <img  className= 'github-navbar' src='https://res.cloudinary.com/josepcortes/image/upload/v1713896520/64e79ca5aff2fb7295bfddf9_github-que-es_vwvfsc.jpg' alt=''/></NavLink>
            </li>
            <li>
            <NavLink to='https://www.linkedin.com/in/josepcortes96/'> <img  className= 'github-navbar' src='https://res.cloudinary.com/josepcortes/image/upload/v1715193228/descarga_bsktrn.png' alt=''/></NavLink>
            </li>
          </ul>
         </div>
         <Menu>
          <div className='menu-wrapper'>
            <Menu.Button className={`navbar-button ${white ? 'light-mode' : 'dark-mode'}`}><Hamburger  toggled={isOpen} toggle={setOpen} /></Menu.Button>
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
