import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const AddDepartment = () => {
    const [did, setDid] = useState("");
    const [dabb, setDabb] = useState("");
    const [dname, setDname] = useState("");


    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/department", {
                did,
                dabb,
                dname
            });
            alert("Department Data Successfully")
            navigate("/department");
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
                        <label className="label">Department ID</label>
                        <div className="control">
                            <input
                                type="number"
                                className="input"
                                value={did}
                                onChange={(e) => setDid(e.target.value)}
                                placeholder="Department ID" required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Department Abbrivation</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={dabb}
                                onChange={(e) => setDabb(e.target.value)}
                                placeholder="Department Abbrivation" required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Department Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={dname}
                                onChange={(e) => setDname(e.target.value)}
                                placeholder="Department Name" required
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

export default AddDepartment;