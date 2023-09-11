import React from 'react'
import postal from "../assets/postal.png"

export const Navigation = () => {
  const fname="Ravi";
  const lname="Kumar";
  return (
    <div>
    <nav className="p-4 flex space-x-3 bg-red-500 font-bold text-left justify-left align-text-bottom">
      <img src={postal} className="h-6 round-full"></img>
      <h1 className="bg-red-500"> Welcome to India Post</h1>
      <h1>Navigation</h1>
      <h1>About</h1>
      <h1>Contact</h1>

    </nav>
    <h1 className='font-bold'>{`My Name is ${fname} ${lname}`} </h1>
      
    </div>
  )
}

export default Navigation
