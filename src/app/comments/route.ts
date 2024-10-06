import { NextRequest } from "next/server";
import { comments } from "./data";

// "/comment" GET request
// Here since the api is present in context of next.js so type of req is "NextRequest", It provides a cleaner and more Next.js-specific way to access various aspects of the request, including query string parameters.
export async function GET(req: NextRequest) {

  const queryStrings = req.nextUrl.searchParams;
  console.log(queryStrings); // query string object with key-value pair

  const query = queryStrings.get("query");
  console.log(query)  // for query string object get the value of key "query" only. 
  
  const filteredComments = query
    ? comments.filter((item) => item.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

// "/comment" POST request, Every route handler function accept a req object which is a standard request object of node.js containing request information like , headers,body etc coming from frontend
export async function POST(req: Request) {
  // Parse the incoming request body as JSON to be uses in code
  const body = await req.json();
  const newComment = {
    id: comments.length + 1,
    text: body.text,
  };
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

/*

1. We can handle a GET request in a route handler by exporting an async function named GET from a route.ts (or route.js) file.

2. We can handle a POST request by defining the POST method as an exported asynchronous function that processes the incoming data from the request body.

3. A query string parameter is a part of a URL that allows you to pass additional data to a web application. It consists of key-value pairs, providing a way to send parameters to the server to filter or manipulate the response. 

*/
