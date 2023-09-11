import React from "react";
import { NavLink } from "react-router-dom";
import Try from "./Try";
import postal from "../assets/postal.png";

const Head1 = () => {
  return (
    
    <div className="p-6 flex-wrap  space-x-24 border bg-red-500 text-center text-white justify-between  rounded-xl font-bold ">
      {/* <img src={postal} className="h-16 align-baseline rounded-full"></img> */}
      <NavLink className="rounded-full bg-yellow-300 p-4 text-red-500 text-center justify-between" to="/">Home</NavLink>
      <NavLink className="rounded-full bg-yellow-300 p-4 text-red-500 text-center justify-between"to="/about">About</NavLink>
      <NavLink className="rounded-full bg-yellow-300 p-4 text-red-500 text-center justify-between"to="/banking">Banking</NavLink>
      <NavLink className="rounded-full bg-yellow-300 p-4 text-red-500 text-center justify-between"to="/Department">Department</NavLink>
      <NavLink className="rounded-full bg-yellow-300 p-4 text-red-500 text-center justify-between"to="/insurance">Insurance</NavLink>
      <NavLink className="rounded-full bg-yellow-300 p-4 text-red-500 text-center justify-between"to="/contact">Contact</NavLink>
      <NavLink className="rounded-full bg-yellow-300 p-4 text-red-500 text-center justify-between" to="/login">Login</NavLink>
      {/* <NavLink to="/signup"></NavLink> */}
    </div>
  );
};

export default Head1;
