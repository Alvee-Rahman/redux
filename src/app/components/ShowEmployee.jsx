"use client";
import React from "react";
import { useSelector } from "react-redux";

const ShowEmployee = () => {
  const empData = useSelector((state) => state.employData.employees);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <h1>Show Employee</h1>
        {empData.map((items) => (
          <h1 key={items.id}>{items.name}</h1>
        ))}
      </div>
    </>
  );
};

export default ShowEmployee;
