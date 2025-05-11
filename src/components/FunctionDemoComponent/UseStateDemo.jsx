import React, { useState } from 'react'

const UseStateDemo = () => {
  const[show,setShow]=useState(true);
  const[change,setChange]=useState(true);
  return (
    <>
      <h1>UseState Demo</h1>
      <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"} Text </button>
      {show && <p>This is toggle Example</p>}
      <button onClick={()=>setChange(!change)} >{change?"Changed":"Change"} Text</button>
      {change && <p>Button Changed</p>}
    </> 
    )
  }

export default UseStateDemo
