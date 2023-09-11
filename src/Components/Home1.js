import React from "react";
import Head1 from "./Head1";
import postal from "../assets/postal.png";

const Home1 = () => {
  return (
    <>
      <Head1 />
      <div className="h-20  space-x-16  items-center justify-between ">
        <h1 className="h-8 bg-yellow-300  rounded-full text-center justify-between font-semibold">
          Welcome to Department Of Posts
        </h1>
        <div id="three">
          <div id="one">
            <img src={postal} /> 
          </div>

          <h1>hellow</h1>
        </div>
      </div>
    </>
  );
};

export default Home1;
