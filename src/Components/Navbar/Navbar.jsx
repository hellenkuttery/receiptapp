import React, { useState } from 'react'
import { Nav,Logo, Hamburger,MenuLink,Menu } from './NavbarStyle'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
   <Nav>
    <Logo to="/home">
    <IoFastFood /><span>recipe</span> </Logo>
     <Hamburger onClick={()=>setOpen(!open)}>
        <GiHamburgerMenu/>
     </Hamburger>
     { /* ---------------------------------- Menu ---------------------------------- */ }
     {/* Deger ile iligi koşul Navbar stle kısmında */}
     <Menu deger={open}  onClick={()=>setOpen(!open)}>
        <MenuLink to="/about">About</MenuLink>
        {/* <MenuLink>Github</MenuLink> kullanamayız dışarıdan bir link*/}
        <a href="https://github.com/">Github</a>
        <MenuLink to="/">Logout</MenuLink>
     </Menu>
   
   </Nav>
  )
}

export default Navbar