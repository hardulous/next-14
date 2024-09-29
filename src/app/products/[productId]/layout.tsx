const handleError = ()=>{
  throw new Error("Error While Fetching Review")
}


// children prop will be replaced by child page component present in productId folder during rendering.
export default function ProductDetailsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    productId: string;
  };
}) {

  // Throws error in layout
  handleError()
  return (
    <>
      {children}
      <h1>Layout of product with id {params.productId}</h1>
    </>
  );
}

// FLOW OF APP STRUCTURING ::

// let say user hit "/products/232", 1st root layout in app directory will be executed which will demand for children props now the route is "/products/productId" which contain its own layout.tsx file so the children prop of root layout will be replaced with layout present [productId] folder. 

// Now for any nested route after [productId] as well like reviews and [reviewId] the same route specifc layout of [productId] will be used 

// Here we are throwing error in this layout file but it will not be handled by error.tsx file present in same level infact the app is in broken state. The error.tsx file will not handle the error thrown at layout file present in same segment, So to solve it we need to put the error.tsx file in layout's parent segment that is in products segment because by doing this we are making sure when ever any error comes in layout file which is in child segment of error.tsx file now that layout file will be considered as page component for this error.tsx file and acc to the component hierarchy of special file errorBoundary sits above page component. 