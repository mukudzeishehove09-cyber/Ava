import React from 'react'
import { Home, Users, DollarSign, RefreshCw } from 'lucide-react'
import '../styles/BottomNavigation.css'

const BottomNavigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/' },
    { id: 'clones', label: 'AI Clones', icon: Users, path: '/clones' },
    { id: 'income', label: 'Income', icon: DollarSign, path: '/income' },
    { id: 'sync', label: 'MegaSync', icon: RefreshCw, path: '/sync' },
  ]

  return (
    <nav className="bottom-navigation">
      {navItems.map((item) => {
        const IconComponent = item.icon
        return (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <IconComponent size={20} />
            <span className="nav-label">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNavigation
