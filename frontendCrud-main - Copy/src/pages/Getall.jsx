import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Getall = () => {

  const [users,setUsers]=useState([]);

  useEffect(()=>{
  const data = JSON.parse(localStorage.getItem("Users")) || []
  setUsers(data);

  },[])

  const handleDelete = (index)=>{
    const tempUsers = [...users]
    tempUsers.splice(index,1);
    setUsers(tempUsers);
    localStorage.setItem("Users",JSON.stringify(tempUsers));
  }
  return (
    <div className="h-screen w-screen">
      <div className="container mx-auto h-full border-gray-600">
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Role</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
             {
              users.map((user,index)=>{
                return(
                  <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4 text-green-500">
                    <Link to={`/edit/${index}`}>
                      <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"  >
                        Edit User
                      </button>
                    </Link>{" "}
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
                     onClick={()=>handleDelete(index)}
                     > 
                      Delete User
                    </button>
                  </td>
                </tr>
           
                )
              })
             }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getall;
