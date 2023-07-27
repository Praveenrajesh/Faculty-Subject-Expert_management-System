import React, { useContext, useState } from 'react'
import axios from 'axios'
import data from './ContextApi.js'
import Sidebar from './Sidebar.js';

import { useNavigate } from 'react-router-dom'

export const Login = () => {

        const [user, setUser] = useState({
        email: "",
        password: ""
        
    })
    
    
    const {setUserData} = useContext(data)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", user)
            .then((res) => {
                alert(res.data.message)
                setUserData(res.data.user)
                navigate("/")
            })
    }

    // console.log(user)
    <Sidebar/>
    return (
        
        
        <div className="columns mt-5" style={{marginLeft:'350px'}}>
           <div class="column is-three-fifths">
            <h1 className='title' style={{textAlign:'center'}}><b>KONGU ENGINEERING COLLEGE</b></h1>
            <h1 className='title' style={{textAlign:'center'}}>Login</h1>
            
           
            
            <form className="filed" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'15px',width:'650px',marginTop:'5%',backgroundSize:'contain'}}>
                <label className="label" style={{marginTop:'5px'}} htmlFor='email'>Email Id</label>
                <input  className="input is-primary" type="email" id="email" name='email' required value={user.email}  onChange={handleChange}  />
                

                <label className="label" style={{marginTop:'5px'}} htmlFor="password">Password</label>
                <input className="input is-primary" type="password" id="password" name='password' required value={user.password}  onChange={handleChange}  />

            <div className="control" style={{margin:'40px'}} >
            <button className="button is-danger" style={{marginLeft:'160px'}} onClick={()=>navigate("/register")}>Register</button>
           <button className="button is-primary" style={{marginLeft:'60px'}} onClick={handleSubmit}>Login</button>
            
                   
            </div>
                
            </form>
            
            
            </div>
        </div>
    )
}
export default Login