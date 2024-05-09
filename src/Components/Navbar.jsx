import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext' 
import { Menu } from '@headlessui/react'
import Hamburger from 'hamburger-react'
import {useState} from 'react'


function Navbar() {
  const { white, toggleTheme } = useTheme(); 
  const [isOpen, setOpen] = useState(false)
  
  const closeMenu = () =>{
    setOpen(false)
  }
 
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
        
  
      <label class="switch">
            <input type="checkbox"
             onChange={toggleTheme}/>
            <span class="slider"></span>
      </label>

      <div className='logo-wrapper'>
          <img src='https://res.cloudinary.com/josepcortes/image/upload/v1715263026/Captura_desde_2024-05-09_01-06-39-removebg-preview_1_qwouq6.png' alt=''/>
      </div>

      <Menu>
          <div className='menu-wrapper'>
            <Menu.Button    className={`navbar-button ${white ? 'light-mode' : 'dark-mode'}`}><Hamburger  toggled={isOpen} toggle={setOpen} /></Menu.Button>
            <Menu.Items anchor="bottom" className={`menu-box ${white ? 'light-mode' : 'dark-mode'}`}>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`} >
                <NavLink to="/" onClick={closeMenu}> Home</NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to="/About" onClick={closeMenu}> About </NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to="/Projects" onClick={closeMenu}> Projects</NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to="/Skills" onClick={closeMenu}> Skills</NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to="/Experience" onClick={closeMenu}> Experience</NavLink>
              </Menu.Item>
              <Menu.Item className={`menu-item1 ${white ? 'light-mode' : 'dark-mode'}`}>
                <NavLink to='https://drive.google.com/file/d/1g6pZCuBloSlGFpWNABPNWg7jQSn7hjin/view' target="_blank">CV</NavLink>
              </Menu.Item>
            </Menu.Items>
          </div>
        </Menu>

      
 
          
    </div>
  );
}

export default Navbar;
