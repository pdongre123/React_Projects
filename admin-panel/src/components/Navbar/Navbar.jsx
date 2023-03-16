import React from "react";
import "./navbar.css";
import { useState } from "react";
import { FaPlus,FaBars } from "react-icons/fa";
import {
  BsFillGearFill,
  BsFileEarmarkBarGraph,
  BsFillFileEarmarkArrowUpFill,
  BsFolder2Open,
  BsFillPersonFill,
  BsBoxArrowRight
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar=({children})=> {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/new",
      name: "NEW",
      icon: <FaPlus />,
    },
    {
      path: "/patient",
      name: "PATIENT",
      icon: <BsFillPersonFill />,
    },
    {
      path: "/folder",
      name: "FOLDER",
      icon: <BsFolder2Open />,
    },
    {
      path: "/upload",
      name: "UPLOAD",
      icon: <BsFillFileEarmarkArrowUpFill />,
    },
    {
      path: "/report",
      name: "REPORT",
      icon: <BsFileEarmarkBarGraph />,
    },
    {
      path: "/settings",
      name: "SETTINGS",
      icon: <BsFillGearFill />,
    },
    {
        path: "/logout",
        name: "LOGOUT",
        icon: <BsBoxArrowRight />,
      },
  ];
  return (
  <div className="container">
    <div style={{width:isOpen ? "300px":"50px"}} className="sidebar">
        <div className="top-section">
            <h1 style={{display:isOpen ? "block":"none"}} className="logo">LOGO </h1>
                <div style={{marginLeft:isOpen ? "50px":"0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
        </div>
        {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link"
                activeclassname="active">

                    <div className="icon">{item.icon}</div>
                    <div style={{display:isOpen ? "block":"none"}} className="link-text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
    <main>{children}</main>

  </div>
  )
}

export default Navbar;
