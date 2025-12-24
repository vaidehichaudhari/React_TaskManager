import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

export default function AddStudent() {
  const { dispatch } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [addres, setAddres] = useState("");
  const [rollno, setRollno] = useState("");
  const [marks, setMarks] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && addres) {
      dispatch({
        type: "ADD_STUDENT",
        payload: { id: Date.now(), name,addres , rollno,marks, completed: false },
      });
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="form-control mt-2"
          placeholder="Addres"
          value={addres}
          onChange={(e) => setAddres(e.target.value)}
          required
        />
         <textarea
          className="form-control mt-2"
          placeholder="Rollno"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
          required
        />
         <textarea
          className="form-control mt-2"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary mt-2">
          Add Student
        </button>
      </form>
    </div>
  );
}