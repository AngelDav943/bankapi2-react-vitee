import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import { useState } from "react"
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';

function App() {
  const [userData, setUser] = useState(null);

  if (userData == null) return <Login setUser={setUser} />

  return (
    <Routes>
      <Route path="/" element={<Dashboard user={userData}/>}/>
    </Routes>
  )
}

export default App