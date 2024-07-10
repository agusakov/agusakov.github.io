// Hamburger.js
import React from 'react'

function Hamburger({ fill = '#594e78', onMenuClick }) {
  function handleClick() { 
    
    //console.log("User click") 
    console.log("clicked")
    
  } 
  return (
    <svg 
      onClick={onMenuClick}
      width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      id="Menu_Burger_Icon"
      data-name="Menu Burger Icon"
    >
      <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default Hamburger
