const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h2>{params.productId}</h2>
    </div>
  );
};

export default ProductDetail;

// This page component will render for any route segment like this "/products/productID" where productId is dynamic in nature, EX ::  "/products/1" , "/products/2", "/products/3"

// Now in prior version of nextJS in page route in order grab the dynamic route value we use "useRouter()" hook but in app router system we can either use "useParams()" hook or every page component in app router receive a router parameter as a prop with name "params" which is an object containing route parameters. But the catch is we are currently in server component which dont allow use of react hooks so we can not use "useParams()" hook in this component so have to use "params" props technique. 
