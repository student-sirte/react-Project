import React, { useState } from 'react'

function App() {
  const [a,b]=useState(23);
  return (
    <>
      <h1>{a}</h1>
      <button onClick={()=>{b(a+1)}}>click me{a}</button>
      <h3>{a}</h3>
    </>
  )
}

export default App
