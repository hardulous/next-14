"use client";

import { useEffect } from "react";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(`${error}`);
  }, []);
  return <div>Error While Fetching Data</div>;
};

export default Error;
