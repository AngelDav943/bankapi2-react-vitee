import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

import Dashboard from './pages/Dashboard';
import Header from './components/Header';

import Transactions from './pages/Transactions';
import Footer from './components/Footer';

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
    <Footer />
  </>
}

export default App