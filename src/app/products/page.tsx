import Link from "next/link";

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product-1</Link>
      </h2>
      <h2>
        <Link href="products/2" replace>Product-2</Link>
      </h2>
      <h2>
        <Link href="products/3">Product-3</Link>
      </h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default ProductList;

// Here right now in <Link> component whatever new route we are going to the previous one is added to history stack to be avaible when we go to previous page. So to replace the current route from history stack use "replace" prop in <Link> component