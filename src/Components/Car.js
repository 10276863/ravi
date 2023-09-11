import React from "react";

const Car = (props) => {
  const { brand, color } = props;
  return (
    <div>
      <p>
        THis is the Car {brand} and color is {color}
      </p>
    </div>
  );
};

export default Car;
