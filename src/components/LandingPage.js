// src/components/LandingPage.js
import React, { useState } from 'react';
import { logout } from '../services/authService';
import DataTable from './DataTable';

const items = [
    { id: 1, name: 'Item 1', category: 'Category A', date: '2024-06-01' },
    { id: 2, name: 'Item 2', category: 'Category B', date: '2024-06-02' },
    { id: 3, name: 'Item 3', category: 'Category A', date: '2024-06-03' },
    // Add more items as needed
];

const LandingPage = () => {
    const [data, setData] = useState(items);

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    return (
        <div>
            <h2>Landing Page</h2>
            <button onClick={handleLogout}>Logout</button>
            <DataTable data={data} setData={setData} />
        </div>
    );
};

export default LandingPage;
