"use client";

const ErrorHandler = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return <div>
    <h2>{error.message}</h2>
    <button onClick={reset}>Try Again</button>
  </div>;
};

export default ErrorHandler;

// This component need to be a client component not server component because the error component needs to handle errors on both the client and the server side,as a result error.js file needs to be a client component. Now to ensure we can recover from error in client side we need to convert page.tsx (that caused error) to be client component as recovering from error means user interaction which is possible only in client component not in server component. 

/* FUNCTION OF error.tsx file

 (a). Automatically wrap a route segment and its nested children in a React Error Boundary

 (b). Isolate errors to affected segments while keeping the rest of the application functional.

 (c). Add a functionality to recover from an error without a full page reload

 (d). If there are multiple error.tsx file in our project and if error happens within a specific layout or route segment, the nearest error.js in that segment will handle it. Otherwise, the global error.js will be used.

 (e). By changing its location in the folder or route segment we are changing the part of UI will be affected when any error pop up. 

*/
