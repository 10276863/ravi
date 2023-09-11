import React from "react";
import { Route, Routes } from "react-router-dom";
import Insurance from "./Insurance";
import Home1 from "./Home1";
import Login from "./Login";
import Banking from "./Banking";
import About1 from "./About1";
import Department from "./Department";
import Contact1 from "./Contact1";
import Signup from "./Signup";




const Try = () => {
  return (
    <>
    <div>
      <Routes>
      <Route path = "/" element = {<Home1 />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="department" element={<Department />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact1 />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </>
  );
};

export default Try;
