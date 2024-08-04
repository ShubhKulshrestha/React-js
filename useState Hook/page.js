"use client"  
import React, { useState } from "react";

 const page = () =>{
  const [marks,setMarks] = useState(70)
  return (
     <>
   <h1 className="font-bold text-xl mx-2">My marks is {marks}</h1>
   <button onClick = {() =>{
     setMarks(33);
   }} className="bg-gray-400 px-4 py-2 rounded mx-2 mt-2 text-white font-bold">Update</button>
   </>
 )
}
export default page;
