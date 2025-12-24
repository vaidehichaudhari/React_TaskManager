import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/AddStudent";
import ListStudent from "./component/ListStudent";
import { StudentProvider } from "../src/context/StudentContext";


const App = () => {
    return (
        <StudentProvider>
            <Router>
                <div className="container mt-4">
                    <h1 className="text-center">Student Information</h1>
                    <Routes>
                        <Route path="/" element={<ListStudent />} />
                        <Route path="/add" element={<AddStudent />} />
                    </Routes>
                </div>
            </Router>
        </StudentProvider>
    );
};

export default App;
