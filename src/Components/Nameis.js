import React, {useState} from "react";

const Style = () => {
  const state = useState();
  const [Myname, Yourname]=useState(ravi);
  const Name=()=>{
    setCount(Yourname);
  }

  return (
    <>
      <div className="items-center mt-40">
        <div className="flex justify-center font-bold text-2xl">
          <h1>{Myname}</h1>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={Name} className="bg-green-400 p-3 rounded-xl text-white font-bold">
            My Name
          </button>
          <button onClick={Name} className="bg-green-400 p-3 rounded-xl text-white font-bold">
            Your Name
          </button>
        
        </div>
      </div>
    </>
  );
};

export default Style;
