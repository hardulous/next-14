import React from 'react'

const InterceptedF2 = () => {
  return (
    <div>(.)f2 InterceptedF2</div>
  )
}

export default InterceptedF2

// This intercepted route will be shown when user navigate from "/f1" to "/f1/f2" through <Link/> component but if directly go to "/f1/f2" then the f2 page will be shown. 