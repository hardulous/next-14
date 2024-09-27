const Reviews = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1>Review Of The Product - {params.productId}</h1>
      <h2>Review-1</h2>
      <h2>Review-2</h2>
      <h2>Review-3</h2>
    </div>
  );
};

export default Reviews;


// Here we are coming in these page component through "/products/productId/reviews" , So we will have access to productId route parameter. 
