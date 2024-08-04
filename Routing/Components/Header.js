import React from "react";
import Link from "next/link";
const Header = () =>{
    
    return(
        <>
<div className="text-white px-3 py-4 bg-green-500 flex justify-between">
    <h1>Logo</h1>
    <div className="flex justify-between gap-10">
    <Link href="/About">About</Link>
    <Link href="/Account">Account</Link>
    <Link href="/Product">Product</Link>
    </div>
    
    
</div>
</>
    )
}
export default Header; 
  
