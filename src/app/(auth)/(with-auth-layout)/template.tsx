"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../style.css";
import { useEffect, useState } from "react";

const navLink = [
  { name: "LOGIN", href: "/login" },
  { name: "REGISTER", href: "/register" },
];

export default function RouteGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return the href value and current route in the browser which we can use to conditionally apply style to current active link
  const pathname = usePathname();

  const [input, setInput] = useState("");

  useEffect(()=>{
    console.log("input change")
  },[input])

  return (
    <>

      <input
        style={{
          border:"1px solid red"
        }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {navLink.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.name}
            href={item.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {item.name}
          </Link>
        );
      })}
      <h1>Inner Layout Of Route Group</h1>
      {children}
    </>
  );
}

// This layout will be common for both "register" and "login" route but not for "forgot-password" route.

// The usePathname hook from Next.js' next/navigation package allows you to get the current path, and you can conditionally apply styles to the active link based on the current route.

// But we can not use this hook in server component as server components don't have access to client-side hooks like usePathname, since server components are rendered on the server and don't have access to the browser's state and by-default all components are server components in next.JS so have to add "use client" at the top of this file to make it client component.

// Now let say we have a controlled input in this layout and we have typed some letter in it now if we navigate from "/login" to "/register" or opposite then state will remain persistent as layout does not re-render on navigation each. But now rename this file from layout to template.tsx then state will not remain persisten and component will re-render again on navigation change. 

// Now it is possilbe to have both template and layout file in same folder or route, In such scenario the layout renders 1st and its child will become the component default exported by template. Most of the time prefer using layout to template for shared UI because of its better performance on remaining persistent. 
