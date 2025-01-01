import React from 'react'
import {Link,Outlet} from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <nav>
            <ul>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="settings">Settings</Link></li>
            </ul>
        </nav>
        <Outlet/>{/* This is where the nested routes will render */}
    </div>
  )
}

export default Dashboard