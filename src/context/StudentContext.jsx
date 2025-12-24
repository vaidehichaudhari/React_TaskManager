import React, { createContext, useReducer } from "react";

// Initial State
const initialState = [];

// Reducer Function
const studentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "EDIT_STUDENT":
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case "DELETE_STUDENT":
      return state.filter((student) => student.id !== action.payload);
    case "TOGGLE_COMPLETE":
      return state.map((student) =>
        student.id === action.payload ? { ...student, completed: !student.completed } : student
      );
    default:
      return state;
  }
};
// Create Context
export const StudentContext = createContext();
// Provider Component
export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);
  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};