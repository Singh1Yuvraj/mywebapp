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
    const [formData, setFormData] = useState({ id: '', name: '', category: '', date: '' });

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    const handleUpdate = (updatedItem) => {
        const index = data.findIndex(item => item.id === updatedItem.id);
        if (index !== -1) {
            const updatedData = [...data];
            updatedData[index] = updatedItem;
            setData(updatedData);
            console.log('Item updated successfully:', updatedItem);
        } else {
            console.error('Item not found for update:', updatedItem);
        }
    };

    const handleSort = (field, ascending = true) => {
        const sortedData = [...data].sort((a, b) => {
            if (a[field] < b[field]) return ascending ? -1 : 1;
            if (a[field] > b[field]) return ascending ? 1 : -1;
            return 0;
        });
        setData(sortedData);
    };

    const handleCreate = () => {
        const newItem = { ...formData, id: data.length + 1 };
        setData([...data, newItem]);
        setFormData({ id: '', name: '', category: '', date: '' });
        console.log('Item created successfully:', newItem);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        console.log('Item deleted successfully:', id);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Landing Page</h2>
            <button onClick={handleLogout}>Logout</button>

            <div>
                <h3>Create New Item</h3>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
                <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
                <button onClick={handleCreate}>Create</button>
            </div>

            <DataTable
                data={data}
                setData={setData}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onSort={handleSort}
            />
        </div>
    );
};

export default LandingPage;
