"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleOrder = () => {
    console.log("Placing The Order");
    router.push("/"); 
    // router.replace("/"); // Navigate to the route without adding current route in history stack
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleOrder}>Place Order</button>
    </>
  );
};

export default OrderProduct;

// the "useRouter" hook from the next/navigation package allows you to navigate to different pages programmatically within client components not in server component as in server component we can not user react hooks.
