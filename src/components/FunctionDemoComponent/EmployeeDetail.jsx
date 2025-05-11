import React, { useState } from 'react'

const EmployeeDetail = (props) => {
  //const uni_name="hello again";// no change props object in parent
  //props.uni_name="Hello Again";//it's show reference error and props can't change parent component and can't allowed overwrite
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
 const handleData=(e)=>{
  e.preventDefault();
  console.log("Employee Details are: ",{name},{email},{password});
  
 }
  return (
    <>
      <h1>Employee Details using Props</h1>
      <p>The name of the university is {props.uni_name}</p>
      <p>The id of the employee id {props.emp_id}</p>
      <p>Employee is working in {props.emp_dep} department </p>
      <p>The employee is the master of  {props.emp_course}</p>
      <ul>
        {Object.entries(props.marks).map(([key,value])=>(
          <li>
            <strong>{key}:</strong> {value}
          </li>
        ))}
        </ul>
        <div className="employeeDetails">
          <form onSubmit={handleData} >
            {/* name fixed */}
            <div>
              <input type="text" id="name" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
            </div><br/>
            <input type="email" name='email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
            <div><br />
              <input type="password" id='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
            </div><br />
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default EmployeeDetail

// import React from 'react'

// const EmployeeDetail = ({uni_name,emp_id,emp_dep,emp_course,marks}) => {
//   uni_name="Hello"
//   return (
//     <>
//       <h1>Employee Details</h1>
//       <p>The name of the university is {uni_name}</p>
//       <p>The id of the employee id {emp_id}</p>
//       <p>Employee is working in {emp_dep} department </p>
//       <p>The employee is the master of  {emp_course}</p>
//       <ul>
//         {Object.entries(marks).map(([key,value])=>(
//           <li>
//             <strong>{key}:</strong> {value}
//           </li>
//         ))}
//         </ul>
//     </>
//   )
// }

// export default EmployeeDetail
