import React, { useState } from 'react'

const PasswordChecker = () => {
  const[password,setPassword]=useState('');
  const getStrength=()=>{
    if(password.length>12){
      return 'very Strong';
    }
    else if(password.length>8){
      return 'Strong';
    }else if(password.length>5){
      return "Medium";
    }else{
      return "Weak";
    }

  }
  return (
    <>
      <div>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <p>Strength: {getStrength()} </p>
    </>
  )
}

export default PasswordChecker
