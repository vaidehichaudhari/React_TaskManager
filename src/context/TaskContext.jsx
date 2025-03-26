import React, { createContext, useReducer } from "react";

const initialState = [];

function taskReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload];
        case "EDIT_TASK":
            return state.map(task =>
                task.id === action.payload.id ? action.payload : task
            );
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload);
        case "TOGGLE_COMPLETE":
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        default:
            return state;
    }
}

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};
