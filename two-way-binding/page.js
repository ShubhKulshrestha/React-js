"use client";
import React, { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");

  return (
    <>
      <h1 className="mx-4 my-4 font-bold text-2xl">Hello</h1>
      <h1 className="mx-4 my-4 font-bold text-2xl">Enter your name</h1>
      <form>
        <input
          type="text"
          className="border-2 border-zinc-800 mx-4 my-2"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(username);
          }}
        />
      </form>
    </>
  );
};
export default page;
