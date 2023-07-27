import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const StudentList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 const[search,setSearch]=useState('');

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/subject/");
    console.log(response)
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/subject/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const searchRecord=async()=>
  {
    if(search){
      await axios.get(`http://localhost:5000/subject/search/${search}`)
      .then(response=>{
        let userDet=[];
        userDet.push(response.data);
        setUser(userDet);
      });
    }else{
      getUsers();
    }
  }
  return (
    <Sidebar>
      <div className="columns mt-5 mgr">
      <div className="column is-full">
        <input type="text" style={{width:"50%",padding: "10px 5px"}} id="form1" onChange={(e)=>setSearch(e.target.value)} placeholder="Enter Faculty ID to Search"></input>
        <button className="button is-success"  type="button" onClick={searchRecord}>Search</button>
        <br></br>
        <br></br>
        <Link to="add" className="button is-success">
          Add New Subject
        </Link>
        <table className="table is-bordered is-fullwidth mt-5">
          <thead>
            <tr>
            <th>S.No</th>
              <th>Faculty ID</th>
              <th>Subject Name</th>
              <th>Subject Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.fid}</td>
                <td>{user.sname}</td>
                <td>{user.scode}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                  {/* <Link
                    to={`pdf/${user._id}`}
                    className="button is-primary is-small ml-2"
                  >
                    PDF
                  </Link> */}
                  <a href={`subject/pdf/${user._id}`} class="button is-primary is-small ml-2" target="_blank">PDF</a>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Sidebar>
  );
};
 
export default StudentList;