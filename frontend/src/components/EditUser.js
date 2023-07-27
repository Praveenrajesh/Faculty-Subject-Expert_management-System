import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
 
const EditUser = () => {
  const [fid, setFid] = useState("");
  const [fname, setFname] = useState("");
  const [faddress, setFaddress] = useState("");
  const [fqual, setFqual] = useState("");
  const [fphone, setFphone] = useState("");
  const [fsub, setFsub] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getUserById();
  }, []);
 
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setFid(response.data.fid);
    setFname(response.data.fname);
    setFaddress(response.data.faddress);
    setFqual(response.data.fqual);
    setFphone(response.data.fphone);
    setFsub(response.data.fsub);

  };
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        fid,
        fname,
        faddress,
        fqual,
        fphone,
        fsub
      });
      alert("Faculty Data Updated")
      navigate("/faculty");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Sidebar>
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
        <div className="field">
            <label className="label">Faculty ID</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={fid}
                onChange={(e) => setFid(e.target.value)}
                placeholder="FacultyID"
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
                placeholder="FacultyName"
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
                placeholder="Faculty Address"
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
                  <option value="B.E">Choose Your Department</option>
                  <option value="B.E">B.E</option>
                  <option value="M.E">M.E</option>
                  <option value="M.C.A">M.C.A</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Faculty Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={fphone}
                onChange={(e) => setFphone(e.target.value)}
                placeholder="Faculty Phone  Number"
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
                placeholder="Faculty Subject"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Sidebar>
  );
};
 
export default EditUser;