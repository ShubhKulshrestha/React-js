"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;

  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );

    setUsers(data); 
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div> <ul><li>{JSON.stringify(users)}</li></ul></div>
    </>
  );
};

export default page;
