import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

export default function ListStudent() {
  const { state, dispatch } = useContext(StudentContext);
console.log(state);
  return (
    <div className="container">
      <Link to='/add' >Add Student</Link>
      <h3>Student List</h3>
      <ul className="list-group">
        {state.map((student) => (
          <li
            key={student.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5 className={student.completed && "text-decoration-line-through" }>
                {student.name}
              </h5>
              <p>{student.addres}</p>
              <p>{student.rollno}</p>
              <p>{student.marks}</p>


            </div>
            <div>
              
              <button
                className="btn btn-warning me-2"
                onClick={() =>
                  dispatch({
                    type: "EDIT_STUDENT",
                    payload: {
                      ...student,
                      title: prompt("Edit Student Information:", student.name) || student.name,
                    },
                  })
                }
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: "DELETE_STUDENT", payload: student.id })}
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