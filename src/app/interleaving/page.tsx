import ClientOne from "../components/ClientOne"
import ServerOne from "../components/ServerOne"

// A Server Component
const Interleaving = () => {
  return (
    <div>
        <h2>Interleaving</h2>
        {/* <ServerOne/> */}
        {/* <ClientOne/> */}
        <ClientOne>
            <ServerOne/>
        </ClientOne>
    </div>
  )
}

export default Interleaving

/*  HERE WE WILL DISCUSS CASES OF HOW SERVER AND CLIENT COMPONENT OPERATE WITH EACH OTHER AS PARENT-CHILD RELATION ::

1. <ServerTwo/> as a child of <ServerOne/>, No issue or working as expected

2. <ClientTwo/> as a child of <ClientOne/>, No issue or working as expected

3. <ClientOne/> as a child of <ServerOne/>, No issue or working as expected

4. Now <ServerOne/> as a child of <ClientOne/>, Issue occur "Can't resolve 'fs'", This is because <ServerOne/> is a server component getting used inside a client component <ClientOne/> result in <ServerOne/> also become a server component. Since client component execute after server component we cannot call server component inside a client component as it will result in new request back to the server. As <ServeOne/> become client component we can not use "fs" module there as it requires server environment for it. 

However there is a work around instead of nesting <ServerOne/> as a child of <ClientOne/> we can pass it as a prop to the client component. A common pattern is to use children prop to create a "slot" in client component. 

*/