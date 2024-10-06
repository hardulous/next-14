import Link from "next/link"

const F4 = () => {
  return (
    <div>
        <h2>F4</h2>
        <Link href={"/f1/f3"}>F3</Link>
        <Link href={"/about"}>about</Link>
    </div>
  )
}

export default F4

// Here from this route we are goind to f3 route by one level up intercepting route (..)f3.

