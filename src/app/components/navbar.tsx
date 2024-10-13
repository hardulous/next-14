// "use client";

// import { useState } from "react"
import NavLink from "./navlink"
import NavSearch from "./navsearch"

const Navbar = () => {

//   const [search, setsearch] = useState("")  

  console.log("Navbar Rendered")  
  return (
    <div>
        <NavLink/>
        <NavSearch/>
    </div>
  )
}

export default Navbar

// Here using state variable in this component with "use client"; directive make this component and all nested child component down the tree as client component as well 