import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Products} from "./components/Products/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import React from 'react'

function App() {
  return (
    <div className='App'>
      <React.StrictMode>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products/>} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
