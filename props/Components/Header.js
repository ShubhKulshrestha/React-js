import React from "react";

const Header = (props) =>{
    console.log(props);
    return(
        <>
<div className="text-white px-3 py-4 bg-green-500 flex justify-between">
    <h1>{props.user}</h1>
    <div className="flex justify-between gap-10">
        <h4>About</h4>
        <h4>Account</h4>
        <h4>Blog</h4>
        <h4>Contact</h4>
    </div>
    
    
</div>
</>
    )
}
export default Header;
