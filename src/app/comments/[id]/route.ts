import { redirect } from "next/navigation";
import { comments } from "../data";

// Dynamic route handler accept additional parameter which is context object which contain a "params" propertry that holds dynamic route parameter
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {

  // Redirect condition
  if(parseInt(params.id) > comments.length){
    redirect("/comments") // This function allows you to redirect the user to another URL which can be either api route and page route. It can be used in Server Components and Route Handlers. The status code will also be 307 (temporary redirect)
  }

  const comment = comments.find((item) => item.id == parseInt(params.id));
  return Response.json(comment);
}

// Patch request "/comments/id"
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { text } = body;
  const index = comments.findIndex((item) => item.id == parseInt(params.id));
  comments[index].text = text;
  return Response.json(comments[index]);
}

// Delete request "/comments/id"
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
    const index = comments.findIndex((item) => item.id == parseInt(params.id));
    const deletedComment = comments[index]
    comments.splice(index,1)
    return Response.json(deletedComment)
}

// Dynamic route handler allows you to handle API requests with dynamic segments in the URL. These segments are defined by wrapping the route parameter in square brackets ([]). Dynamic route handlers are especially useful when you need to perform operations based on an ID, slug, or any variable in the URL. Methods like "PATCH , PUT , DELETE" work using it.

// Here the working of POST , PUT and PATCH is same but the key difference lie in code practice so, "POST" is used to create a new resource. "PATCH" is used to partially update an existing resource. "PUT" is used to update an existing resource or create it if it does not exist.

// Here currently if we try to fetch comments with id that does not exist then it result 500 error so to handle it we will use next.JS "redirect()". 

// 