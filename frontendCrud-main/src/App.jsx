import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Getall from "./pages/Getall.jsx";
import Add from "./pages/Add.jsx";
import Edit from "./pages/Edit.jsx";

const App = () => {
 
 const [users,setUsers]=useState([]);


 
  
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">User Management</h1>

        {/* Buttons to navigate to Add and Edit pages */}
        <div className="flex justify-center space-x-4 mb-8">
          <Link to="/add">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Add User
            </button>
          </Link>
          <Link to="/">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              back to home
            </button>
          </Link>
        </div>

        {/* Define Routes for Add, Edit, and Getall pages */}
        <Routes>
          <Route
            path="/add"
            element={
              <Add
               users={users}
               setUsers={setUsers}
              />
            }
          />
          <Route path="/edit/:id" element={<Edit 
               users={users}
               setUsers={setUsers} />} />
          <Route path="/" element={<Getall
           users={users}
           setUsers={setUsers}
          />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
