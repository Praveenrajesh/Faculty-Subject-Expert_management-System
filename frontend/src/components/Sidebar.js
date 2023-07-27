import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    
    FaThList,FaHandsHelping,FaRegIdBadge
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/faculty",
            name:"Faculty",
            icon:<FaUserAlt/>
        },
        {
            path:"/subject",
            name:"Academic",
            icon:<FaRegIdBadge/>
        },
        /*{
            path:"/department",
            name:"Department",
            icon:<FaHandsHelping/>
        },
        {
            path:"/schdule",
            name:"Schdule",
            icon:<FaThList/>
        }*/
        
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "100px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">KEC</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;