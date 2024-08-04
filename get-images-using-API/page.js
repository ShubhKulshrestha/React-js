"use client"
import axios from "axios";
import React, { useState } from "react";

const page = () =>{
  const [images , setImages] = useState([]);
  const getIMages = async() =>{
    try{
      const reponse = await axios.get("https://picsum.photos/v2/list");
    const data = reponse.data;
    setImages(data);
    
    } catch(error){
       console.error("Error fetching images");
    }
  }
  return (
    <>
    
    <button onClick={getIMages} className ="px-5 py-3 ml-5 mt-5 bg-green-500 text-white font-bold cursor-pointer">Get Images</button>
    <div className="p-5">
     {images.map((elem,i)=>{
       return <img
       key={i}
       src = {elem.download_url}
       width = {280}
       height = {280}
       className="m-5 rounded inline-block"
       />
     })}
    </div>
    </>
  )
}

export default page;

