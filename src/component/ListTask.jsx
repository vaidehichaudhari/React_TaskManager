import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

const ListTask = () => {
    const { tasks, dispatch } = useContext(TaskContext);

    return (
        <div className="card p-4">
            <h2 className="mb-3">Task List</h2>
            <Link to="/add" className="btn btn-success mb-3">Add Task</Link>
            {tasks.length > 0 ? (
                <ul className="list-group">
                    {tasks.map(task => (
                        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{task.title}</strong> - {task.description}
                                {task.completed && <span className="badge bg-success ms-2">Completed</span>}
                            </div>
                            <div>
                                <button className="btn btn-warning me-2" onClick={() => dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })}>
                                    {task.completed ? "Undo" : "Complete"}
                                </button>
                                <button className="btn btn-danger" onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted">No tasks available. Add a new task!</p>
            )}
        </div>
    );
};

export default ListTask;
