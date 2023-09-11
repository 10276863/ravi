import React, { useState } from "react";

const Style = () => {
  const state = useState();
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const Decre = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="items-center mt-40">
        <div className="flex justify-center font-bold text-2xl">
          <h1>{count}</h1>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={IncNum}
            className="bg-green-400 p-3 rounded-xl text-white font-bold"
          >
            Increment
          </button>
          <button
            onClick={Decre}
            className="bg-green-400 p-3 rounded-xl text-white font-bold"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Style;
