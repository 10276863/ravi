import React from "react";
import Head1 from "./Head1";
import Signup from "./Signup";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <Head1 />
      
      <div id="log">
        <h1>Please enter User ID and Password for Login:</h1>
        <div className="h-8 px-4 p-4  ">
          <input type="Email" placeholder="email" />
        </div>
        <div className="h-8 px-4 p-7 ">
          <input type="Password" placeholder="password" className="h2" />
        </div>
        <div className="h-8 p-10 px-4 text-start justify-between font-semibold space-x-10 ">
          <button className="bg-red-400 h-10 w-20 rounded-full" >
            Login
          </button>
        
        
          <button  className="bg-red-400 h-10 w-20 rounded-full">
           <Link to="/signup">Signup</Link>
          </button>
        </div>
        </div>
      
    </>
  );
};

export default Login;
