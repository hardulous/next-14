"use client";

import { useState } from "react"

const NavSearch = () => { 

  // Using browser feature 
  const [search, setsearch] = useState("")  

  console.log("Navsearch Rendered")
  return (
    <div>NavSearch</div>
  )
}

export default NavSearch

// Add state on this component so only this component operates at client level. 