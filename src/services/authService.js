// src/services/authService.js

const users = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'password456' },
];

export const login = async (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        throw new Error('Invalid username or password');
    }
    return user;
};

export const register = async (username, password) => {
    const userExists = users.some(u => u.username === username);
    if (userExists) {
        throw new Error('User already exists');
    }
    users.push({ username, password });
};

export const isAuthenticated = () => {
    return !!sessionStorage.getItem('user');
};

export const logout = () => {
    sessionStorage.removeItem('user');
};
