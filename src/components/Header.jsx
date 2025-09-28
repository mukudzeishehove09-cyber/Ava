import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="app-header glass-effect">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">🌌</div>
          <h1 className="gradient-text">Ava Skyrocket</h1>
        </div>
        
        <div className="user-section">
          <div className="user-avatar">
            <span>👤</span>
          </div>
          <div className="status-indicator">
            <div className="status-dot pulse"></div>
            <span>AI Active</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
