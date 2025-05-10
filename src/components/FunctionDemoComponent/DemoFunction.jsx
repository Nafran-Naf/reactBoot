import React, { useState } from 'react'

const DemoFunction = () => {
  const[count,setCount]=useState(10);

  let fname="Peter Parker";
  // const counter=()=>{
  //   setCount(count+1);
  // }
  return (
   <>
    <h1>The name of the spider man is {fname}</h1>
    <p>Total likes are {count}</p>
    <button onClick={()=>setCount(count+1)}>Like</button>
    <button onClick={()=>setCount(count-1)}>DisLike</button>
    <button onClick={()=>setCount(count*0)}>Reset</button>
   </>
  )
}

export default DemoFunction
