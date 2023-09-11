import React from "react";
import { NavLink } from "react-router-dom";

const Heading = () => {
  return (
    <div className="p-5 flex space-x-40 bg-red-500 font-extrabold text-center justify-between">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/Hostel">Hostel</NavLink>
    </div>
  );
};

export default Heading;
