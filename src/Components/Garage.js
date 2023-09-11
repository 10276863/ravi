import React from "react";

import Car from "./Car";

const Garage = () => {
  ReactDOM.render(<h1>Hello wORLD</h1>, document.getElementById("root"));
  return (
    <div>
      <h1>this is the garage file</h1>
      <Car brand="Ford" Color="red"></Car>
    </div>
  );
};

export default Garage;
