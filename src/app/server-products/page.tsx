// Route level configuration for caching
// export const fetchCache = "default-cache"

import { cookies } from "next/headers";

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
};
const Products = async () => {
  // Caching is enabled
  //   const data = await fetch("http://localhost:3001/products");

  // Revalidating data after some time interval
  const data = await fetch("http://localhost:3001/products", {
    next: {
      revalidate: 10,
    },
  });

  // Disable caching
  //   const data = await fetch("http://localhost:3001/products",{
  //     cache : "no-store"
  //   });

  const products: Product[] = await data.json();

  // Using dynamic function
  //   const cookieStore = cookies()
  //   cookieStore.get("theme")

  // Subsequent request
  //   const data2 = await fetch("http://localhost:3001/products/1");
  //   const productDetail: Product = await data2.json()

  return (
    <div>
      <h1>LIST OF PRODUCTS</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            {product.title} - {product.price}
          </div>
        );
      })}
      {/* <h5>{productDetail.title} - {productDetail.price}</h5> */}
    </div>
  );
};

export default Products;

// To solve the issue of subsequent cache for "no-store" we can export a fetchCache variable from this component with value as "default-cache".

// For dynamic function cookies() the before request "/products" is cached but after cookies() the "/products/1" will not be cached.

// Here when fetching "/products" with revalidate set to 10, Now after initial fetch if again fetching data within 10 sec then cached data will be used but after 10 sec time has passed then re-fetches the data. 

// Here we can set the revalidate route segment configuration to establish the default revlidation time for a layout or page component. export const revalidate - 10;. This will not override the revalidation value set for individual fetch.  
