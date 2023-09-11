import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginbackoffice from './Loginbackoffice'

const Backoffice = () => {
  return (
    <>
    <div>
    <Routes>
        <Route path to="/" element={<Loginbackoffice/>}/>
    </Routes>
      
    </div>
    </>
  )
}

export default Backoffice

