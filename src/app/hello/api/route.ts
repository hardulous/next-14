import { cookies, headers } from "next/headers"
import { NextRequest } from "next/server"

// Here this function name is GET so it will handle get request made to "/hello"
export async function GET(req: NextRequest){
  
  // Here get the request headers object in 1st way
  const requestHeaders = new Headers(req.headers)
  console.log(requestHeaders.get("Authorization"))

  // get the request headers object in 2nd way
  const headerList = headers() // This function allows you to read the HTTP incoming request headers in Server Components, Server Actions, Route Handlers and Middleware.

  console.log(headerList.get("Authorization"))

  // set a cookie
  cookies().set("resultPerPage","20")

  // get a cookie 
  console.log(cookies().get("resultPerPage"))

  // get cookie from request parameter
  const theme = req.cookies.get("theme")
  console.log(theme)

  // Returning a response with headers 

  // return new Response("Hello World!") // Response header "Content-Type" is text/plain

  // return new Response("<h1>Hello World!</h1>") // Response header "Content-Type" is text/plain
  
  // "Content-Type" is text/html so browser render the content in html format
  return new Response("<h1>Hello World!</h1>",{
    headers:{
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  })

}


/*

1. route.ts file export a function that handle the api request made on end point "/hello"

2. Each HTTP method (GET, POST, PUT, DELETE, etc.) is defined as an exported function in the route.ts file. The name of the function corresponds to the HTTP method it handles and name other then that will result in error. Unlike in traditional page router a same route handler function have to handle get,post,put etc. 

3. Similar to page routes in app router , route handlers can be organized in folders and nested within subfolders that allow us to create nested route handler , dynamic route etc. 

4. If a folder contain both page.tsx and route.ts file and user visit that route then the route handler that is route.ts file will handle the request by-default, To solve this conflict if page route and api route have same name then put the route handler in "/api" sub-directory. 

5. Header are of 2 types ::

 (a). Request Headers => There are sent by the client, such as a web browser to the server. They contain essential information about the request, Which help the server understand and process it correctly. EX :: 
 
 "User-Agent" (which identifies the browser and operating system to the server).
 
 "Accept" (which indicates the content types like text, video or image formats that the client can process.)
 
 "Authorization" (it is used by the client to authenticate itself to the server when requesting any sensitive information). 

 (b). Response Headers => Theese are sent back from the server to the client. They provide information about the server and the data being sent in the response. EX ::

 "Content-Type" (which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML, application/json for JSON data, etc.)

 In next.JS we read request headers and send back the response headers. 

6. There are 2 ways to read request headers one is using req parameter of type NextRequest and other is using headers() function of next.JS but the headers are read-only. 

7. To set header we have to send a new Response with headers set to it. But thing to note is to set a header we need to sent new Response with new headers.  

8. There are 2 ways of both setting and getting a cookie. To set a cookie 1st way to set a header "Set-Cookie" with same value while sending a new Response, 2nd way is to use "cookie()" function from next.JS . To read a cookie we can use request parameter passed in route handler function or use "cookie()" function from next.JS. 

*/