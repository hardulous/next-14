const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {

  // Since it is a server component which does not execute on browser but on server level so below console.log() will not be shown in browses rather on terminal. 
  console.log(params)

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