import Link from "next/link"

const F2 = () => {
  return (
    <div>
        <h2>F2</h2>
        <Link href={"/f1"}>F1</Link>
    </div>
  )
}

export default F2


// Here right now we are using <Link/> navigating from "/f1" to "/f1/f2" but now using intercepting route we will show a modal of "/f1/f2" UI instead of whole page.

// To create intercepting route we create a folder in same level as f2 folder with name (.)folder_name so for f2 it should be (.)f2 folder which again contain a page.tsx will which will be shown in a modal when user naviigate from "/f1" to "/f1/f2". 