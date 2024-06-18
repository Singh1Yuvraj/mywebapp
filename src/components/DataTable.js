import React, { useState } from 'react';

const DataTable = ({ data, onUpdate, onDelete, onSort }) => {
    const [editItem, setEditItem] = useState(null);
    const [formData, setFormData] = useState({ id: '', name: '', category: '', date: '' });

    const handleEditClick = (item) => {
        setEditItem(item);
        setFormData(item);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onUpdate(formData);
        setEditItem(null);
    };

    return (
        <div>
            <button onClick={() => onSort('name', true)}>Sort by Name Ascending</button>
            <button onClick={() => onSort('name', false)}>Sort by Name Descending</button>
            <button onClick={() => onSort('date', true)}>Sort by Date Ascending</button>
            <button onClick={() => onSort('date', false)}>Sort by Date Descending</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{editItem?.id === item.id ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            ) : (
                                item.name
                            )}</td>
                            <td>{editItem?.id === item.id ? (
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                />
                            ) : (
                                item.category
                            )}</td>
                            <td>{editItem?.id === item.id ? (
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            ) : (
                                item.date
                            )}</td>
                            <td>
                                {editItem?.id === item.id ? (
                                    <button onClick={handleSave}>Save</button>
                                ) : (
                                    <button onClick={() => handleEditClick(item)}>Edit</button>
                                )}
                                <button onClick={() => onDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
