import Navbar from "../components/navbar"

const LandingPage = () => {
  console.log("Landing-page Rendered")  
  return (
    <div>
        <Navbar/>
        <h2>LandingPage</h2>
    </div>
  )
}

export default LandingPage

// Here when user comes to this component the console.log will be shown in server (terminal) not in browser because it is a server component. 