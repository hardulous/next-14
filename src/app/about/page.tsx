import { cookies } from "next/headers";

// Here metadata for this about page contain same property "title" as present in root layout.tsx so this one will replace the one present in root layout.tsx. 
export const metadata = {
  title: "About Aman",
};

const About = () => {
  
  // Dynamic function for dynamic rendering
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")
  console.log(theme)

  return (
    <div>About</div>
  )
}

export default About

// This page component inside about folder maps to "localhost:3000/about"