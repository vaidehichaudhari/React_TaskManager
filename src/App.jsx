import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "../src/component/AddTask";
import ListTask from "../src/component/ListTask";
import { TaskProvider } from "../src/context/TaskContext";


const App = () => {
    return (
        <TaskProvider>
            <Router>
                <div className="container mt-4">
                    <h1 className="text-center">Task Manager</h1>
                    <Routes>
                        <Route path="/" element={<ListTask />} />
                        <Route path="/add" element={<AddTask />} />
                    </Routes>
                </div>
            </Router>
        </TaskProvider>
    );
};

export default App;
