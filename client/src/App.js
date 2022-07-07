
import React from 'react'
import Navbar from './components/Navbar'
import ToyCard from './components/ToyCard'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Register from './pages/Register';
import Login from './pages/Login';
import Search from './pages/Search';

export default function App() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add" element={<Add />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

