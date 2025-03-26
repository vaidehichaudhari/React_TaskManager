import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

export default function ListTask() {
  const { state, dispatch } = useContext(TaskContext);
console.log(state);
  return (
    <div className="container">
      <Link to='/add' >Add Task</Link>
      <h3>Task List</h3>
      <ul className="list-group">
        {state.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5 className={task.completed && "text-decoration-line-through" }>
                {task.title}
              </h5>
              <p>{task.description}</p>
            </div>
            <div>
              <button
                className="btn btn-success me-2"
                onClick={() =>
                  dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
                }
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="btn btn-warning me-2"
                onClick={() =>
                  dispatch({
                    type: "EDIT_TASK",
                    payload: {
                      ...task,
                      title: prompt("Edit Title:", task.title) || task.title,
                    },
                  })
                }
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}