import React from 'react'
import Header from '../components/Header'
import '../styles/Income.css'

const Income = () => {
  const incomeStreams = [
    { name: 'Dropshipping Store', revenue: '$1,247', status: 'active', growth: '+12%' },
    { name: 'YouTube Automation', revenue: '$892', status: 'active', growth: '+8%' },
    { name: 'Ebook Sales', revenue: '$453', status: 'active', growth: '+5%' },
    { name: 'Course Platform', revenue: '$255', status: 'active', growth: '+15%' }
  ]

  return (
    <div className="income-page fade-in">
      <Header />
      <div className="page-content">
        <div className="page-header">
          <h1>Auto Income Generator</h1>
          <p>Launch revenue streams automatically</p>
        </div>

        <div className="income-overview">
          <div className="total-revenue-card glass-effect">
            <h3>Total Monthly Revenue</h3>
            <div className="revenue-amount">$2,847</div>
            <div className="revenue-growth positive">+18% from last month</div>
          </div>
        </div>

        <div className="income-streams-section">
          <div className="section-header">
            <h3>Active Income Streams</h3>
            <button className="new-stream-btn">
              + New Stream
            </button>
          </div>
          
          <div className="streams-grid">
            {incomeStreams.map((stream, index) => (
              <div key={index} className="stream-card glass-effect">
                <div className="stream-header">
                  <h4>{stream.name}</h4>
                  <div className={`status-badge ${stream.status}`}>
                    {stream.status}
                  </div>
                </div>
                <div className="stream-revenue">
                  <span className="revenue">{stream.revenue}</span>
                  <span className={`growth ${stream.growth.includes('+') ? 'positive' : 'negative'}`}>
                    {stream.growth}
                  </span>
                </div>
                <div className="stream-actions">
                  <button className="action-btn view">View</button>
                  <button className="action-btn optimize">Optimize</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-launch-section">
          <h3>Quick Launch Templates</h3>
          <div className="templates-grid">
            <div className="template-card">
              <div className="template-icon">🛍️</div>
              <h4>Dropshipping Store</h4>
              <p>Launch in 24 hours</p>
              <button className="launch-btn">Launch</button>
            </div>
            <div className="template-card">
              <div className="template-icon">🎬</div>
              <h4>YouTube Channel</h4>
              <p>Automated content</p>
              <button className="launch-btn">Launch</button>
            </div>
            <div className="template-card">
              <div className="template-icon">📚</div>
              <h4>Ebook Publishing</h4>
              <p>AI-written books</p>
              <button className="launch-btn">Launch</button>
            </div>
            <div className="template-card">
              <div className="template-icon">🎓</div>
              <h4>Online Course</h4>
              <p>Monetize expertise</p>
              <button className="launch-btn">Launch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Income
