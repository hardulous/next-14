"use client";

import { useState } from "react";

const ClientTwo = () => {

    console.log("ClientTwo")

  // Replicating client side operation
  const [name, setname] = useState("");

  return <div>ClientTwo</div>;
};

export default ClientTwo;

// 