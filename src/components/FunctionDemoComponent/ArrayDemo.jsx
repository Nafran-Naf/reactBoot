// import React, { use, useEffect, useState } from 'react'
// import './ArrayDemo.css'

// const ArrayDemo = () => {
//   const cartoon = ["Shinchan", "Tom & Jerry", "Doremon", "Scooby Doo", "Pokemon", "Ben 10"];
//   const users = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 },
//     { id: 3, name: "Charlie", age: 28 }
//   ];
//   // console.log(users);
//   // console.log(cartoon);
//   // useEffect(()=>{
//   //   fetch("https://api.npoint.io/91cd56555020f5a44119")
//   //   .then((res)=>res.json())
//   //   .then((data)=>console.log(data))
//   // })

//   const[plantsData,setPlantsData]=useState([]);

//   useEffect(()=>{
//     const fetchPlantsData=async()=>{
//       try{
//         const response=await fetch("https://api.npoint.io/90ab236225149463608c");
//         if(!response.ok) throw new Error("Something went Wrong");
//         const data= await response.json();
//         console.log("Data",data);
//         setPlantsData(data);
//       }
//       catch(e){
//         console.log(e);
        
//       }
//     }
//     fetchPlantsData();
//   })

//   // useEffect(()=>{
//   //   fetch("https://api.npoint.io/90ab236225149463608c")
//   //   .then((res)=>res.json())
//   //   .then((data)=>console.log(data))
//   // })

  

//   return (
//     // <>
//     //   <h1>Array Demo</h1>

//     //   <div>
//     //     {cartoon.map((c,i) => (
//     //       <>
//     //         <li key={i}>{c}</li>
//     //       </>
//     //     )
//     //     )}
//     //   </div>
//     //   <br />
//     //   <br />
//     //   <div>
//     //     {users.map((u,j) => (
//     //       <>
//     //         <li key={j}>{u.name}</li>
//     //       </>
//     //     )
//     //     )}
//     //   </div>
//     // </>
//     <>
//       <div>
//         {plantsData.map((plant)=>(
//           <div className='plantContainer'>
//             <li>{plant.plant_name}</li>        
//             <li><img src={plant.imageUrl} alt={plant.plant_name} className='imgPlant' /></li>        
//             <li>{plant.description}</li>        
//             <li>{plant.careInstructions}</li>        
//             <li>{plant.price}</li>        
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default ArrayDemo;
import React, { useEffect, useState } from 'react';
import './ArrayDemo.css';

const ArrayDemo = () => {
  const [plantsData, setPlantsData] = useState([]);

  useEffect(() => {
    const fetchPlantsData = async () => {
      try {
        const response = await fetch("https://api.npoint.io/90ab236225149463608c");
        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        console.log("Data", data);
        setPlantsData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPlantsData();
  }, []); // 🔧 Add empty dependency array to prevent infinite fetch loop

  return (
    <div className="card-container">
      {plantsData.map((plant) => (
        <div className="card" key={plant.id}>
          <img src={plant.imageUrl} alt={plant.plant_name} className="card-image" />
          <div className="card-content">
            <h3 className='plantName'>{plant.plant_name}</h3>
            <p className='plantDes'><strong>Description:</strong> {plant.description}</p>
            <p className='plantCare'><strong>Care:</strong> {plant.careInstructions}</p>
            <p className='plantPrice'><strong>Price:</strong> ₹{plant.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrayDemo;
