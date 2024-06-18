// src/components/DataTable.js
import React, { useState } from 'react';

const DataTable = ({ data, setData }) => {
    const [filter, setFilter] = useState('');
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSort = (field) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleAdd = () => {
        const newItem = {
            id: data.length + 1,
            name: `Item ${data.length + 1}`,
            category: `Category ${String.fromCharCode(65 + (data.length % 26))}`,
            date: new Date().toISOString().split('T')[0]
        };
        setData([...data, newItem]);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Filter"
                value={filter}
                onChange={handleFilterChange}
            />
            <button onClick={handleAdd}>Add Item</button>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('name')}>Name</th>
                        <th onClick={() => handleSort('category')}>Category</th>
                        <th onClick={() => handleSort('date')}>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.date}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
