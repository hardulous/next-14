// 1st way of opting out of cache
export const dynamic = "force-dynamic" 

// by-default cached GET() method
export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}

/*

Here if we go to "/time" route it will show time and visit again will just update the time, This is the behaviour in dev mode but in production build mode only first time the current time will be shown and after that any subsequent request to "/time" will show same time as because route handler with GET() method and response object are cached by-default

In order to opt out of caching behaviour we have 4 ways ::

 1. Set dynamic mode in Segment config option as its default value is "auto". Doing this will make sure the route handler will execute for each and every request in both dev or prod mode and will not perform caching. 

 2. Using request object with GET() method
 3. Using dynamic next.JS functions like "headers()" and "cookies()"
 4. Using any HTTP method other than GET() 

 In all above scenarios the response will not be   cached 

*/