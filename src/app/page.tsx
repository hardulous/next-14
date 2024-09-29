import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1>WELCOME TO OUR HOME PAGE</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  )
}

export default Home

// Again we have to export default the page component not name export, As export default work smoothly with pre-rendering. 

// This page.tsx file map to root of our domain or home page which is "localhost:3000/"