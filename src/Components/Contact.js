import React, { useState } from "react";
import Heading from "./Heading";

const Contact = () => {
  const [inputValue, setinputValue] = useState("");
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  return (
    <>
      <Heading />
      <div>
        <input
          type="text"
          placeholder="Enter some name"
          onchange={handleChange}
        />
        {/* <h1 className='bg-green-200 font-bold text-center justify-between'>Customer Care Toll Free Number 1800 266 6868
Call centre agent- 09.00 am to 06.00 pm (except Sunday and gazetted holidays)
IVR facility- 24 x 7 

​</h1> */}
      </div>
    </>
  );
};

export default Contact;
