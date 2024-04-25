import React from 'react'
import { useState } from 'react'


function Toggle() {
    const[dark, setDark] = useState(true)

    const toggleMode = () =>{
        setDark(!dark)
    }
  return (
    <div>
        <button onClick={toggleMode}>
            {dark ? 'dark-mode' : 'light-mode'}
        </button>
    </div>
  )
}

export default Toggle
