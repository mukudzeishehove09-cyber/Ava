import React from 'react'
import Header from '../components/Header'
import '../styles/Clones.css'

const Clones = () => {
  return (
    <div className="clones-page fade-in">
      <Header />
      <div className="page-content">
        <div className="page-header">
          <h1>AI Role Multiplier</h1>
          <p>Create digital clones to scale your presence</p>
        </div>
        
        <div className="coming-soon-section">
          <div className="coming-soon-icon">🤖</div>
          <h2>AI Clone Management</h2>
          <p>This feature is coming soon! Manage and create your AI clones here.</p>
        </div>
      </div>
    </div>
  )
}

export default Clones
