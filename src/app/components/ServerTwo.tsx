import fs from "fs";

const ServerTwo = () => {

    console.log("ServerTwo")

  // Replicating some server side operation
  fs.readFileSync("src/app/components/ServerTwo.tsx", "utf-8");

  return <div>
    <h3>ServerTwo</h3>
  </div>;
};

export default ServerTwo;
