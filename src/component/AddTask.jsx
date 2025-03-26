import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

export default function AddTask() {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), title, description, completed: false },
      });
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control mt-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary mt-2">
          Add Task
        </button>
      </form>
    </div>
  );
}