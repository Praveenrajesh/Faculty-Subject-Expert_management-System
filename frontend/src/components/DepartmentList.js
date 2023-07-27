import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const StudentList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/department/");
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/department/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Sidebar>
      <div className="columns mt-5 mgr">
      <div className="column is-full">
        <Link to="add" className="button is-success">
          Add New Department
        </Link>
        <table className="table is-bordered is-fullwidth mt-5">
          <thead>
            <tr>
            <th>S.No</th>
              <th>Department ID</th>
              <th>Department Abbrivation</th>
              <th>Department Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.did}</td>
                <td>{user.dabb}</td>
                <td>{user.dname}</td>
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