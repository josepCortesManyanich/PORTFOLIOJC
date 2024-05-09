import React from 'react'
import { useTheme } from './ThemeContext'

function Footer() {
  const { white } = useTheme();  
  return (
    <div className={`footer ${white ? 'light-mode' : 'dark-mode'}`}>
      <div className='footer-box'>
        <h3> PORTFOLIO PERSONAL JOSEP CORTÉS MAÑANICH/ 2024 </h3>
      </div>
    </div>
  )
}

export default Footer
