import React from 'react'
import { Link } from 'react-router-dom'
import Navbarbackoffice from './Navbarbackoffice'
import { NavLink } from 'react-router-dom'
import Backoffice from './Backoffice'
import Logo from "../assets/Logo.png";

const Loginbackoffice = () => {
  return (
    <div >
    

    
    <div className='border'>
    </div>
    <div className='text-left justify-start px-10 mt-10 space-x-36 text-red-500 text-3xl font-bold'>
    <img  className=" h-20 w-32 p-4 px-4 "src={Logo}></img>

<div className='text-red-500 text-center justify-between text-3xl font-bold'>
<h1>POSTAL BACK OFFICE</h1>
</div>



</div>
<div >
<div className='bg-red-500 text-white font-bold   ms-auto mr-20 mb-5 h-12 w-24 text-right justify-center p-2 px-4 text-2xl items-end justify-items-end'>
<button>EXIT</button>


    </div>
    </div>
    <div >
    {/* <img  className=" h-40 w-40 "src={postal}></img> */}
    </div>
    <div className='bg-yellow-300 h-8'>

    </div>
    <div id='log'>
    <div>
    User ID:

    <input type="text" placeholder=""></input> </div>
    <div>
    Password:
    <input type='password' placeholder=''></input> </div>
    <div>
    <button>Login</button>
    </div>
    

    </div>
    <div className='bg-red-500 h-8 '>

    </div>
    </div>
  )
}

export default Loginbackoffice
