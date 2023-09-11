import React from 'react';
import Head1 from './Head1';


const Signup = () => {
  return (
    <>
    <Head1/>
    <div id='sign'>
    <div>
      Please fill up the following details:
    </div>
    <div className='text-center justify-between  h-4 p-6'>
        Name:
        <input type="text" placeholder='' className=''></input>
    </div>
    <div className='text-center justify-between h-4 p-6'>
        Email:
        <input type="Email" placeholder='' className=''></input>
    </div>
    <div className='text-center justify-between  h-4 p-6 '>
        Mobile No:
        <input type="text" placeholder='' className=''></input>
    </div>
    <div className='text-center justify-between h-4 p-6 '>
        Password:
        <input type="password" placeholder='' className=''></input>
    </div>
    <div className='p-10 px-10'>
    <button className="bg-red-400 h-10 w-28 rounded-full text-center justify-between ">Submit</button>
    </div>
    </div>

    </>
  )
}

export default Signup;
