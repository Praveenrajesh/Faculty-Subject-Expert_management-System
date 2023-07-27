import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import data from './components/ContextApi';
import Dashboard from "./components/Dashboard.js";
import Login from './components/Login.js';
import Register from './components/Register.js';
import UserList from "./components/UserList.js";
import AddUser from "./components/AddUser.js";
import EditUser from "./components/EditUser.js";
import StudentList from "./components/StudentList.js";
import AddStudent from "./components/AddStudent.js";
import EditStudent from "./components/EditStudent.js";
import GeneratePdf from "./components/GeneratePdf.js";
import DepartmentList from "./components/DepartmentList.js"
import AddDepartment from "./components/AddDepartment.js"
import EditDepartment from "./components/EditDepartment.js"
import { useState } from 'react';
import AddSchdule from "./components/AddSchdule.js";
import Sidebar from "./components/Sidebar.js";
function App() {
  const [userdata, setUserData] = useState({})
  return (
    <data.Provider value={{ userdata, setUserData }}>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" element={userdata && userdata._id ? <Dashboard /> : <Login />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="faculty" element={<UserList />} />
          <Route path="/faculty/add" element={<AddUser />} />
          <Route path="/faculty/edit/:id" element={<EditUser />} />
          <Route path="subject" element={< StudentList />} />
          <Route path="/subject/add" element={<AddStudent />} />
          <Route path="/subject/edit/:id" element={<EditStudent />} />
          <Route path="/subject/pdf/:id" element={<GeneratePdf />} />
          <Route path="department" element={< DepartmentList />} />
          <Route path="/department/add" element={<AddDepartment />} />
          <Route path="/department/edit/:id" element={<EditDepartment />} />
          <Route path="/schdule" element={<AddSchdule />} />
        </Routes>

        
      </BrowserRouter>
    </data.Provider>
  );
}

export default App;