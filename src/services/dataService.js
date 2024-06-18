// src/services/dataService.js
let items = [
    { id: 1, name: 'Item 1', category: 'Category A', date: '2024-06-01' },
    { id: 2, name: 'Item 2', category: 'Category B', date: '2024-06-02' },
    { id: 3, name: 'Item 3', category: 'Category A', date: '2024-06-03' },
];

export const getItems = () => {
    return items;
};

export const addItem = (item) => {
    items.push({ id: items.length + 1, ...item });
};

export const updateItem = (id, updatedItem) => {
    items = items.map(item => item.id === id ? { ...item, ...updatedItem } : item);
};

export const deleteItem = (id) => {
    items = items.filter(item => item.id !== id);
};
