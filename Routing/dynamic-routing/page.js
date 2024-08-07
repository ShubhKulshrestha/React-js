"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1 className="mx-3 my-2">This is home page</h1>
      <button
        onClick={getUser}
        className="p-3 bg-green-400 font-bold cursor-pointer text-white border-none rounded mx-3"
      >
        Get Data
      </button>
      <div className="mx-3 my-2 text-4xl bg-slate-300 p-4">
        <ul>
          {users.map((e) => {
            return (
              <li>
                {e.username} --- <a href={`/${e.id}`}>Explore</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default page;
