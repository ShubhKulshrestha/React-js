"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = () =>{
    toast("login successful")
  }
  return (
    <div>
      <button onClick = {notify}className='px-5 py-3 mx-5 my-5 rounded text-black bg-slate-300 border-gray-400'>Login</button>
      <ToastContainer />
    </div>
  )
}

export default page;
