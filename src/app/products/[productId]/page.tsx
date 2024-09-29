import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

// Dynamic metadata based on route parameter
// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

// Dynamic metadata based on api call or promise
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone 15 ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetail = ({ params }: Props) => {
  return (
    <div>
      <h2>{params.productId}</h2>
    </div>
  );
};

export default ProductDetail;

// This page component will render for any route segment like this "/products/productID" where productId is dynamic in nature, EX ::  "/products/1" , "/products/2", "/products/3"

// Now in prior version of nextJS in page route in order grab the dynamic route value we use "useRouter()" hook but in app router system we can either use "useParams()" hook or every page component in app router receive a router parameter as a prop with name "params" which is an object containing route parameters. But the catch is we are currently in server component which dont allow use of react hooks so we can not use "useParams()" hook in this component so have to use "params" props technique.

// Sometime metadata depend on certain dynamic information like such as route parameter, external api data and metadata of parent segments, So for this we export a generateMetadata() from layout.tsx or page.tsx file that returns a MetaData object.

// Here this generateMetadata() can be async as well which then can be used to make external api call if my metadata depend on it. 

// Here if we try to export both static metadata obj and generateMetadata() from layout or page.tsx file then it will show error "metadata" and "generateMetadata" cannot be exported at the same time, please keep one of them". 