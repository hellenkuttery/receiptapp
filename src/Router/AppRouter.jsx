import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from "../pages/Login/Login";
import Home from '../pages/Home/Home';
import PrivateRouter from './PrivateRouter';
import Details from '../pages/Details/Details';
import Navbar from './../Components/Navbar/Navbar';
import About from '../pages/About/About';
import NotFound from '../pages/ErrorPage/NotFound';


const AppRouter = () => {
  return (
  <BrowserRouter>
 <Navbar/>
      <Routes>    
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home/>} />
        </Route>
        <Route path="/details" element={<Details/>}></Route>
        {/* id ile gelseydi
        <Route path="/details/:id" element={<Details />} /> */}

        <Route path="/about" element={ <About/> }></Route>
        
        <Route path="*" element={ <NotFound/> }></Route>
        

    </Routes>
  </BrowserRouter>
  )
}
export default AppRouter;
