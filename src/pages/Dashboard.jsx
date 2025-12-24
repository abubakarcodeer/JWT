import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css"

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
    return;
  }

  axios.get(
    "https://api.escuelajs.co/api/v1/auth/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  .then(res => {
    setUser(res.data)})
  .catch(() => {
    localStorage.removeItem("token");
    navigate("/");
  });
}, []);


  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="form dashboard">
      <h2>Profile</h2>

      {user && (
        <>
        <img src={user.avatar} alt="avatar"/>
        <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>User ID: {user.id}</p>
        </>
      )}

      <button className="logout" onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
