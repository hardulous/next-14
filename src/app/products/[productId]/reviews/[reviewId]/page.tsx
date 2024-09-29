"use client"

import { notFound } from "next/navigation";

const handleError = ()=>{
  throw new Error("Error While Fetching Review")
}

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {

  // Since it is a server component which does not execute on browser but on server level so below console.log() will not be shown in browses rather on terminal. 
  console.log(params)

  // Programatically showing 404 page of reviewId route
  if(Number(params.reviewId) > 1000) notFound()

  // Throw runtime error to be catched by error.tsx file 
  // handleError()

  return (
    <div>
      <h1>
        Review-{params.reviewId} Of Product-{params.productId}
      </h1>
    </div>
  );
};

export default ReviewDetail;

// Now this page componenet will have access to both "productId" and "reviewId" router parameter. 

// Here notFound() function allows you to render the not-found.js file within a route segment that is inside [reviewId] folder but if there is no "not-found.tsx" file inside [reviewId] folder then the one inside app directory will be used and if that does not present then default 404 page of next.JS will be shown. 

// Here the handleError() will throws error which will be catched by error.tsx file to show error ui for better user experience. 