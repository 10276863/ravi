import React from "react";
import Heading from "./Heading";
import postal from "../assets/postal.png";
import Head1 from "./Head1";

const Home = () => {
  return (
    <>
      <Heading />
      
      <div>
      
        <h1 className="bg-green-200 font-bold text-center justify-between items-center" >Welcome to Home Page</h1>
        <img src={postal} className="h-72"></img>
      </div>
    </>
  );
};

export default Home;
