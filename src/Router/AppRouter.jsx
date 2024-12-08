import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from "../pages/Login/Login";


const AppRouter = () => {
  return (
  <BrowserRouter>
  {/* Navbar */}
    <Routes>    
        <Route path="/" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter