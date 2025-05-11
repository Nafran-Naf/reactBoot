import React, { useState } from 'react'

const ThemeMode = () => {
  const[darkmode,setDarkMode]=useState(false);
  return (
    <>
      <div style={{
        background:darkmode?"Black":"white",
        padding:"20px",
        color:darkmode?"white":"black"
      }}>
      <h1>{darkmode?"Dark":"Light"}Mode</h1>
      <button onClick={()=>setDarkMode(!darkmode)}>Toggle Theme</button>
      </div>
    </>
  )
}

export default ThemeMode
