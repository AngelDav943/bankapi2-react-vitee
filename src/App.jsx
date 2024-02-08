import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import { useState } from "react"
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Loading from './pages/Loading';

function App() {
  const [loaded, setLoading] = useState(false);
  const [userData, setUser] = useState(null);

  if (userData == null) return <Login setLoading={setLoading} setUser={setUser} />

  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard user={userData} />} />
      <Route path="/home" element={<p>Hola</p>} />
    </Routes>
  </>
}

export default App