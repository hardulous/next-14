const Layout = async ({ children }: { children: React.ReactNode }) => {

  // Calling similar type of data in parent component as well
  const data = await (await fetch("http://localhost:3001/products")).json();

  console.log({ data });

  return <div>{children}</div>;
};

export default Layout;

// Here when user visit "/server-products" the flow first comes to this layout.tsx file which start fetch request to "/products", not it checks in "request-memoization" wether request with similar URL and option is already been made, Finding none then check at "data-cache" which also show no result. It then fetch data from "json-server" which fetches the data and then store the data in "data-cache" -> "request memoization" and returns it to the layout component. Then layout proceeds to render page component inside which also fetches the similar type of "/products" request, Now we are still in same render phase (that is not a new page reload) so page component get the result from "request-memoiztion" as similar type of request is already been made by layout.tsx.  