import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <Link to="/profile">Profile</Link>
            <div>Dashboard</div>
        </>
    )
};

export default Dashboard;
