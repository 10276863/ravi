import React from "react";

export const Welcome = () => {
  return (
    <div className="block rounded-1g bg-lime-500 p-6">
      <button className="bg-yellow-500 p-2 font-bold text-left justify-center">
        {" "}
        Dark Mode{" "}
      </button>
      <button className="bg-yellow-500 p-2 font-bold text-center">
        {" "}
        White mode{" "}
      </button>
    </div>
  );
};

export default Welcome;
