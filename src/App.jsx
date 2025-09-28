import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Clones from './pages/Clones'
import Income from './pages/Income'
import MegaSync from './pages/MegaSync'
import BottomNavigation from './components/BottomNavigation'
import './styles/App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <Router>
      <div className="app">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clones" element={<Clones />} />
            <Route path="/income" element={<Income />} />
            <Route path="/sync" element={<MegaSync />} />
          </Routes>
        </div>
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </Router>
  )
}

export default App
