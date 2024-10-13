"use client";

import { useState } from "react";
import { useTheme } from "../components/theme-provider";

const AboutClient = () => {

  // Consuming context
  const theme = useTheme()

  // It will be shown 2 times on browser because of react strict mode and 1 time on server (terminal)  
  console.log("Client Render")

  const [name, setName] = useState("");

  return (
    <>
      <h2 style={{
        color: theme.colors.primary
      }}>About Client</h2>
      {name}
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default AboutClient;

/*

1. This is a client component because of special directive "use client" at the top of this component. As client component runs on client so we can handle user interactivity like onChange, onClick eventlistener and can use browser API'S like localstorage(), useState() , useEffect() etc. 

2. By adding "use client" directive we are telling next.JS that is component <AboutClient/> along with any components it imports is intended for client side execution. 

3. Now if i add console.log statment in this component and reload the page we will see it on client but also on server (terminal). This is because eventhough client components are primarly executed in the client but they ar also pre-rendered once on the server during initial load to allow the user to immediately see the page's HTML content rather than a blank screen for optimiztion.  

*/
