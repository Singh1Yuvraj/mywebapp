
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; 
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import PrivateRoute from './PrivateRoute';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={
                    <PrivateRoute>
                        <LandingPage />
                    </PrivateRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
