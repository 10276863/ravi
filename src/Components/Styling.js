import React from "react";

const Styling = () => {
    const main = {
        color:"red",
        fontWeight:"bold"
    };
  return (
    <>
      <div className="main1">
        <nav className="p-4 flex space-x-4 bg-black-400 font-bold text-center">
          <h1>Postal Service</h1>
        </nav>
      </div>
      <div id="main2">
        <nav className="p-4 flex space-x-4 bg-orange-200 font-bold text-center">
          <h1>postal services</h1>
        </nav>
      </div>
      <div>
        <h2>Postal Services</h2>
      </div>
      <div style={{ color: "yellow", fontWeight: "bold" }}>
        <h1> Department of Posts Postal Services</h1>
      </div>
      <div style={main}>
        <button className="bg-slate-600 p-3 font-bold text-center justify-center">Welcome to Post Office</button>
      </div>
    </>
  );
};

export default Styling;
