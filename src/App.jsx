import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import { useState } from "react"
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Loading from './components/Loading';
import Transactions from './pages/Transactions';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoading] = useState(false);
  const [userData, setUser] = useState(null);

  if (userData == null) return <Login setLoading={setLoading} setUser={setUser} />

  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard user={userData} />} />
      <Route path="/home" element={<Dashboard user={userData} />} />
      <Route path="/transactions" element={<Transactions user={userData} setUser={setUser} />} />
    </Routes>
    <Footer />
  </>
}

export default App