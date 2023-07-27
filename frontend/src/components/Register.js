import React ,{useState}from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [user,setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        repassword: ""
    })
    const navigate = useNavigate()

const handleChange = (e)=>{
    const { name , value} = e.target;
    setUser((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
}

const handleSubmit = async(e)=>{
    e.preventDefault();
        console.log(user)
    const {firstName,lastName,email,password,repassword} = user
    if(firstName && lastName && email && password){
        if(password === repassword){
            await axios.post("http://localhost:5000/register",user)
            .then((res) => {
                alert(res.data.message)
                navigate("/login")

            })

        }
        else{
            alert("check Your Password")
        }
    }
    else{
        alert("Enter the Required Fields")
    }

        

}
  return (
    <div className='columns mt-5' style={{marginLeft:'360px'}}>
        <div class="column is-three-fifths">
        <h1 className='title' style={{textAlign:'center'}}><b>KONGU ENGINEERING COLLEGE</b></h1>
        <h1 className='title' style={{textAlign:'center'}}>Register</h1>
        <form className="filed" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'15px'}}>
            <label htmlFor='label' style={{marginTop:'5px'}}>First Name</label>
            <input className="input is-link" type="text" id="firstname" onChange={handleChange} name="firstName" value={user.firstName}/>

            <label htmlFor='lastname mt-5' style={{marginTop:'5px'}}>Last Name</label>
            <input className="input is-link" type="text" id="lastname" onChange={handleChange} name="lastName" value={user.lastName}/>

            <label htmlFor='email' style={{marginTop:'5px'}}>Email Id</label>
            <input className="input is-link" type="email" id="email" required name='email' value={user.email} onChange={handleChange}/>

            <label htmlFor="password" style={{marginTop:'5px'}}>Password</label>
            <input className="input is-link" type="password" id="password" name='password' value={user.password} onChange={handleChange}/>
            
            <label htmlFor="re-password" style={{marginTop:'5px'}}>Re-Password</label>
            <input  className="input is-link" type="password" id="re-password" name='repassword' value={user.repassword} onChange={handleChange}/>
            <div className="control" style={{margin:'40px'}} >
            <button className="button is-danger" style={{marginLeft:'150px'}} onClick={handleSubmit}>Register</button>
              
            <button className="button is-primary" style={{marginLeft:'50px'}} onClick={()=>navigate("/login")}>login</button>
            </div>
        </form>
        
    </div>
   </div>
  )
}

export default Register