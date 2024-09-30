import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [name,setName]=useState("");
  const [email,setEmail]=useState(""); 
  const [role,setRole]=useState("");

  useEffect(()=>{
    const Users = JSON.parse(localStorage.getItem("Users")) || []
    if(id>=Users.length){
     navigate("/")
     return;
    }else{
      setName(Users[id].name);
      setEmail(Users[id].email);
      setRole(Users[id].role)
    }
  },[])
 

  const handleSubmit = (e)=>{
    e.preventDefault();
    const Users = JSON.parse(localStorage.getItem("Users")) || []
    if(id>=Users.length){
     navigate("/")
     return;
    }else{
      Users[id].name = name
      Users[id].email = email
      Users[id].role = role
      localStorage.setItem("Users",JSON.stringify(Users));
      navigate("/")
    }
  }
  return (
    <div className="container mx-auto flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Update User</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
          />
        </div>

        {/* Role Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"

        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default Edit;
