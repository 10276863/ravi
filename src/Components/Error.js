import React, { useState } from "react";
import Heading from "./Heading";

const Error = () => {
  const [input, setinput] = useState(2);
  const Multi=()=>{
    setinput = (input+2);
  };

  return (
    <>
      <Heading />
      <div>
        <h1 className="bg-green-400 font-extrabold text-center justify-between">
          
          Page Not Found
        </h1>
        <h1>{input}</h1>
        <button
          onClick={Multi}
          className="bg-slate-500 p-3 rounded-xl font-bold text-center"
        >
          
          Multiple of two
        </button>
      </div>
    </>
  );
};

export default Error;
