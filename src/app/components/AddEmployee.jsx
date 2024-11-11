"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../redux/slice";
const AddEmployee = () => {
  const [empName, setEmpName] = useState("");
  const dispatch = useDispatch();
  const dataDispatch = () => {
    dispatch(addEmployee(empName));
    setEmpName("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <h1>Add employee</h1>
        <input
          id="add-employee"
          type="text"
          placeholder=" add employee name here "
          className="h-[50px] w-[400px] border border-black"
          onChange={(e) => setEmpName(e.target.value)}
          value={empName}
        />
        <button
          className=" mt-4 px-5 py-2 border border-black bg-slate-600 text-white"
          onClick={dataDispatch}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddEmployee;
