import React from 'react'
import '../styles/StatsGrid.css'

const StatsGrid = () => {
  const stats = [
    { icon: '🤖', value: '5', label: 'Active Clones', color: '#8b5cf6' },
    { icon: '💰', value: '$2,847', label: "Today's Revenue", color: '#10b981' },
    { icon: '🔄', value: '12', label: 'Auto Tasks', color: '#3b82f6' },
    { icon: '🌍', value: '3', label: 'Income Streams', color: '#f59e0b' }
  ]

  return (
    <div className="stats-grid-section">
      <h3>Business Overview</h3>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card glass-effect">
            <div 
              className="stat-icon"
              style={{ backgroundColor: `${stat.color}20`, borderColor: statColor }}
            >
              {stat.icon}
            </div>
            <div className="stat-info">
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsGrid
