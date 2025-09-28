import React from 'react'
import '../styles/QuickActions.css'

const QuickActions = () => {
  const actions = [
    { icon: '🚀', label: 'Launch Income Stream', type: 'primary' },
    { icon: '🔄', label: 'MegaSync Content', type: 'secondary' },
    { icon: '🌍', label: 'Global Translate', type: 'secondary' },
    { icon: '📊', label: 'View Analytics', type: 'secondary' },
    { icon: '👥', label: 'Hire Talent', type: 'secondary' },
    { icon: '⚡', label: 'Quick Task', type: 'secondary' }
  ]

  return (
    <div className="quick-actions-section">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`action-btn ${action.type === 'primary' ? 'primary' : 'secondary'}`}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickActions
