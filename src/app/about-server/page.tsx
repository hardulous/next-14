import { useState } from "react"

const AboutServer = () => {

  // const [counter, setcounter] = useState(0) // Throw error as useState() requires client environment to operate but this component run in server environment. 

  return (
    <div>AboutServer</div>
  )
}

export default AboutServer

/* 

1. By default every component in next.JS is server component

2. This component execute in server side not in client side which gives benifit like zero bundle size, access to server side resources, enhance security, better SEO etc.

3. But the drawback of this component is it can not use browser API's like localstorage, cookies etc, And handle user interactivity. If try to use useState(), useEffect(), onClick handler etc it will result in error as these things required browser environment to operate


*/