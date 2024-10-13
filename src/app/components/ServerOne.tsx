import fs from "fs"
import ServerTwo from "./ServerTwo"
import ClientOne from "./ClientOne"

const ServerOne = () => {

    console.log("ServerOne")

  // Replicating some server side operation
  fs.readFileSync("src/app/components/ServerOne.tsx","utf-8")

  return (
    <div>
        <h3>ServerOne</h3>
        <ServerTwo/>
        {/* <ClientOne/> */}
    </div>
  )
}

export default ServerOne

// A server component to study interleaving pattern 