import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import AdminProfile from "./components/AdminProfile";
import Inventory from "./components/Inventory";
import AddMedicine from "./components/AddMedicine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<AdminLogin />} />
        <Route exact path="/register" element={<AdminRegister />} />
        <Route exact path="/profile" element={<AdminProfile />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/addmedicine" element={<AddMedicine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

