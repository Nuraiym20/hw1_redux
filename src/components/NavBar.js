import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
         <ul style={{display:"flex", listStyleType: "none"}}>
            <li style={{marginRight:"15px"}}>
                <NavLink to ="/" className="link">contact</NavLink>
            </li>
            <li style={{marginRight:"15px"}}>
                <NavLink to ="/about" className="link">home</NavLink>
            </li>
            <li style={{marginRight:"15px"}}>
                <NavLink to ="/post" className="link">services</NavLink>
            </li>
            <li style={{marginRight:"15px"}}>
                <NavLink to ="/post" className="link">shop</NavLink>
            </li>
        </ul>
    </div>
  )
}
