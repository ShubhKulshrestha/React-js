"use client"
import React, { useState } from "react";
import Header from "@/Components/Header";

const page = () =>{
  const [user,setUser]= useState("Shubham")
    return (
      <>
        <Header user= {user}/>
        <h1 className="px-3">My name is Shubham Kulshrestha</h1>
      </>
    )
}

export default page;
