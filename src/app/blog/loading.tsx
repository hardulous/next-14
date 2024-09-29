const loading = () => {
  return (
    <div>loading...</div>
  )
}

export default loading

// Here this file will wrap the page.tsx file of its directory and any nested child directory as well as react suspense boundary. 

/* BENIFITS OF LOADING.TSX FILE

 (a). We can display the loading state as soon as user navigates to a new route without need to rely on any state variable and react suspense component.

 (b). The layout or template will remain interactive while new route segments are loading. It means users can continue interacting with certain parts of the application comes under layout or template such as navigation menu, sidebar, footer etc, Even if the main content is still being fetched. 

*/