import React from 'react'
import '../App.css'
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import data from './ContextApi'
import { useContext } from 'react'


  const Dashboard = () => {
    const navigate = useNavigate()
    const {userdata,setUserData} = useContext(data)
    console.log(userdata.firstName)
  
  
    const logout = ()=>{
      setUserData({})
      navigate("/login")
    }
  
   
  
  return (
    <Sidebar>
    <div className='head'>
      <div> 
       
      </div>
       <h1>Welcome To Dashboard</h1>
       <button className='button is-danger' style={{float:"right"}} onClick={logout}>Logout</button>
       <h2 className="username-home">Hii 👋 {userdata.firstName} {userdata.lastName}</h2>
      </div>
      </Sidebar>

  )

  }
  export default Dashboard

