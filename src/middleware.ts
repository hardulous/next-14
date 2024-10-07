import { NextResponse, type NextRequest } from "next/server";

// A function which will execute when
export function middleware(req: NextRequest) {
  const response = NextResponse.next(); // To execute next middleware in the sequence

  // Here working with cookies
  const themePrefernce = req.cookies.get("theme");
  if (!themePrefernce) {
    response.cookies.set("theme", "dark");
  }

  // Working with headers
  response.headers.set("custom-header","custom-value")

  return response

  // Redirecting using conditonal statement
  // if (req.nextUrl.pathname === "/profile") {

  //   // return NextResponse.redirect(new URL("/hello", req.url));

  //   // Now by .rewrite() the url remain "/profile" but the content of "/hello" will be shown
  //   return NextResponse.rewrite(new URL("/hello", req.url));

  // }

  // Redirecting to home page "/"
  // return NextResponse.redirect(new URL("/", req.url));
}

// The config object with the matcher property specifies which routes the middleware applies to. In our case, the middleware targets "/profile" route only.

// Commenting it means this middleware will execute for every request made on our application

// export const config = {
//   matcher: "/profile",
// };

/*

 1. MIDDLEWARE CAN ::

 Protect Routes: Ensure only authenticated users can access certain parts of your app.

 Handle Redirects: Redirect users based on specific conditions, such as device type or locale.

 Modify Responses: Change response headers or perform other modifications.

 Implement Rate Limiting: Control the rate of incoming requests to prevent abuse.

 Middleware allows us to specify paths where it will be active in 2 ways :: Let say we want to redirect user to home page when user visit "/profile" route. 
 
 (a). Custom matcher config
 (b). Conditional statements

  2. Middleware also allows URL rewrites which is useful for SEO. It involves modifying the incoming request URL before it reaches your application's routing logic. This process allows developers to present clean, user-friendly URLs while internally mapping them to different endpoints or resources.

  3. We can also use middleware to handle both cookies and headers of both request and response object. 

*/
