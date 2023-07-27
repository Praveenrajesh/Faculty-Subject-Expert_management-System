import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
 
const AddUser = () => {
  const [fid, setFid] = useState("");
  const [fname, setFname] = useState("");
  const [faddress, setFaddress] = useState("");
  const [fqual, setFqual] = useState("");
  const [fphone, setFphone] = useState("");
  const [fsub, setFsub] = useState("");

  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        fid,
        fname,
        faddress,
        fqual,
        fphone,
        fsub
      });
      alert("Faculty Data Successfully")
      navigate("/faculty");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Sidebar>
    <div className="columns mt-5">
      <div className="column is-three-fifths">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Faculty ID</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={fid}
                onChange={(e) => setFid(e.target.value)}
                placeholder="FacultyID" required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Faculty Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="FacultyName" required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Faculty Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={faddress}
                onChange={(e) => setFaddress(e.target.value)}
                placeholder="Faculty Address" required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Faculty Qualification</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={fqual}
                  onChange={(e) => setFqual(e.target.value)}
                >
                   <option value="empty">Choose Your Department</option>
                  <option value="B.E">B.E</option>
                <option value="M.E">M.E</option>
                <option value="M.C.A">M.C.A</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Faculty Phone</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={fphone}
                onChange={(e) => setFphone(e.target.value)}
                placeholder="Faculty Phone  Number" required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Faculty Subject</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={fsub}
                onChange={(e) => setFsub(e.target.value)}
                placeholder="Faculty Subject" required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Sidebar>
  );
};
 
export default AddUser;