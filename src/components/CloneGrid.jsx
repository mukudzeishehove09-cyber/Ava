import React from 'react'
import '../styles/CloneGrid.css'

const CloneGrid = () => {
  const clones = [
    { type: 'ceo', name: 'CEO Clone', description: 'Managing business strategy', status: 'active', avatar: '👑' },
    { type: 'creator', name: 'Creator Clone', description: 'Creating content', status: 'active', avatar: '🎨' },
    { type: 'sales', name: 'Sales Clone', description: 'Closing deals', status: 'active', avatar: '💼' },
    { type: 'ops', name: 'Ops Clone', description: 'Managing systems', status: 'active', avatar: '⚙️' },
    { type: 'support', name: 'Support Clone', description: 'Customer service', status: 'active', avatar: '🤝' },
    { type: 'new', name: 'New Clone', description: 'Add AI role', avatar: '+' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10b981'
      case 'inactive': return '#6b7280'
      case 'processing': return '#f59e0b'
      default: return '#6b7280'
    }
  }

  return (
    <div className="clone-grid-section">
      <div className="section-header">
        <h3>Your AI Team</h3>
        <button className="see-all-btn">See All</button>
      </div>
      <div className="clones-grid">
        {clones.map((clone, index) => (
          <div key={index} className={`clone-card ${clone.type === 'new' ? 'new-clone' : ''}`}>
            <div className="clone-avatar">
              {clone.avatar}
            </div>
            <h4>{clone.name}</h4>
            <p>{clone.description}</p>
            {clone.status && (
              <div 
                className="clone-status"
                style={{ 
                  backgroundColor: `${getStatusColor(clone.status)}20`,
                  color: getStatusColor(clone.status),
                  borderColor: getStatusColor(clone.status)
                }}
              >
                {clone.status}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CloneGrid
