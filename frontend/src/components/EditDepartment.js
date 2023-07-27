import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const EditDepartment = () => {
    const [did, setDid] = useState("");
    const [dabb, setDabb] = useState("");
    const [dname, setDname] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/department/${id}`);
        setDid(response.data.did);
        setDabb(response.data.dabb);
        setDname(response.data.dname);


    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/department/${id}`, {
                did,
                dabb,
                dname
            });
            alert("Department Data Updated")
            navigate("/department");
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
                        <label className="label">Department ID</label>
                        <div className="control">
                            <input
                                type="number"
                                className="input"
                                value={did}
                                onChange={(e) => setDid(e.target.value)}
                                placeholder="Department ID"
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
                                placeholder="Department Abbrivation"
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
                                placeholder="Department Name"
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

export default EditDepartment;