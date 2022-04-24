import React from 'react'
import './Toggle.css'

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
// Dark theme
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Toggel = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const handleClick = () => {
    //debugger
    theme.dispatch({type: 'toggle'})
  }

  return (
    <div className="toggle" onClick={handleClick}>
        <Moon/>
        <Sun/>
        <div className="t-btn" 
        style={darkMode? {left : '2px'} : {right : '2px'}} 
        ></div>
    </div>
  )
}

export default Toggel