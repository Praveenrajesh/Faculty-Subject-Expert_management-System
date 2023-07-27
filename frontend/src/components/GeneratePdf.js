import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import jsPDF from 'jspdf'


const EditStudent = () => {
  const [fid, setFid] = useState("");
  const [fname, setFname] = useState("");
  const [ay, setAy] = useState("");
  const [bat, setBat] = useState("");
  const [semno, setSemno] = useState("");
  const [sname, setSname] = useState("");
  const [scode, setScode] = useState("");
  const [pass, setPass] = useState("");
  const [cls, setCls] = useState("");
  const [sect, setSect] = useState("");
  const [nos, setNos] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
       getUserById();
       
     }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/subject/${id}`);
    setFid(response.data.fid);
    setFname(response.data.fname);
    setAy(response.data.ay);
    setBat(response.data.bat);
    setSemno(response.data.semno);
    setSname(response.data.sname);
    setScode(response.data.scode);
    setPass(response.data.pass);
    setCls(response.data.cls);
    setSect(response.data.sect);
    setNos(response.data.nos);

   

  };

  const exportPDF = () => {
   
    let element = (
      <div style={{textAlign:'left',alignItem:'left'}}>
        <div style={{display: "flex", flexWrap: "wrap" }}>Faculty Report</div>
        <table className="table is-bordered is-fullwidth mt-5">
         <thead style={{textAlign:'center',alignItem:'center'}} >
          <th>Items</th>
          <th>Details</th>
         </thead>
          <tbody>

            <tr><td>Faculty ID</td><td>{fid}</td></tr>
            <tr><td>Faculty Name</td><td>{fname}</td></tr>
            <tr><td>Academic Year</td>
            <td> {ay}</td>
            </tr>
            <tr><td>Batch :</td>
            <td>
            {bat}
            </td>
            </tr>
            <tr><td>Semester Number</td>
            <td>{semno}</td>
            </tr>
            <tr><td>Subject Name</td>
            <td>{sname}</td>
            </tr>
            <tr><td>Subject Code</td>
            <td>{scode}</td>
            </tr>
            <tr><td>Pass Percentage</td>
            <td>{pass}</td>
            </tr>
            <tr><td>Class</td>
            <td>{cls}</td>
            </tr>
            <tr><td>Section</td>
            <td>{sect}</td>
            </tr>
            <tr><td>No.of Students</td>
            <td>{nos}</td>
            </tr>

          
        </tbody>
      </table>
        </div >
        
    );
const doc = new jsPDF("p", "pt", "letter");
doc.html(ReactDOMServer.renderToString(element), {
  callback: function (doc) {
    doc.save('Faculty.pdf');
  }
});
  };
 
 return(
<div> <button onClick={exportPDF}>export</button></div>
 );
};

export default EditStudent;