"use client";

import { useState } from "react"
import ClientTwo from "./ClientTwo"
import ServerOne from "./ServerOne";

const ClientOne = ({children}: {children: React.ReactNode}) => {

  console.log("ClientOne")  

  // Replicating client side operation
  const [name, setname] = useState("")  

  return (
    <div>
        <h3>ClientOne</h3>
        {/* <ClientTwo/> */}
        {/* <ServerOne/> */}
        {children}
    </div>
  )
}

export default ClientOne

// Here instead of directly calling server component <ServerOne/> here we will use children prop for it. It is the recommened pattern for this purpose. As far as child component does not know that "children" is a server component all it knows to render the placeholder where children props will slot in. Here we are not limited to children prop only we can also pass <ServerOne/> component as a another prop to this client component  