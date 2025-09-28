import React, { useState } from 'react'
import Header from '../components/Header'
import '../styles/MegaSync.css'

const MegaSync = () => {
  const [syncStatus, setSyncStatus] = useState('idle')
  
  const platforms = [
    { name: 'YouTube', icon: '📹', connected: true, lastSync: '2 hours ago' },
    { name: 'TikTok', icon: '🎵', connected: true, lastSync: '1 hour ago' },
    { name: 'Instagram', icon: '📸', connected: true, lastSync: '30 mins ago' },
    { name: 'LinkedIn', icon: '💼', connected: true, lastSync: '3 hours ago' },
    { name: 'Twitter', icon: '🐦', connected: false, lastSync: 'Never' },
    { name: 'Shopify', icon: '🛍️', connected: true, lastSync: '5 mins ago' },
    { name: 'Amazon', icon: '📦', connected: false, lastSync: 'Never' },
    { name: 'Etsy', icon: '🎨', connected: false, lastSync: 'Never' }
  ]

  const recentActivities = [
    { action: 'Video posted to YouTube & TikTok', time: '2 hours ago', status: 'success' },
    { action: 'Product synced to Shopify', time: '5 mins ago', status: 'success' },
    { action: 'Content translated to Spanish', time: '1 hour ago', status: 'success' },
    { action: 'Failed to connect to Amazon', time: '10 mins ago', status: 'error' }
  ]

  const handleGlobalSync = () => {
    setSyncStatus('syncing')
    // Simulate sync process
    setTimeout(() => {
      setSyncStatus('completed')
      setTimeout(() => setSyncStatus('idle'), 3000)
    }, 2000)
  }

  return (
    <div className="megasync-page fade-in">
      <Header />
      <div className="page-content">
        <div className="page-header">
          <h1>Cross-Platform MegaSync</h1>
          <p>Manage all your platforms from one place</p>
        </div>

        {/* Global Sync Button */}
        <div className="global-sync-section">
          <button 
            className={`global-sync-btn ${syncStatus}`}
            onClick={handleGlobalSync}
            disabled={syncStatus === 'syncing'}
          >
            <div className="sync-icon">
              {syncStatus === 'syncing' ? '🔄' : '⚡'}
            </div>
            <div className="sync-text">
              {syncStatus === 'idle' && 'Sync All Platforms'}
              {syncStatus === 'syncing' && 'Syncing...'}
              {syncStatus === 'completed' && 'Sync Complete!'}
            </div>
          </button>
        </div>

        {/* Connected Platforms */}
        <div className="platforms-section">
          <h3>Connected Platforms</h3>
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className={`platform-card ${platform.connected ? 'connected' : 'disconnected'}`}>
                <div className="platform-icon">{platform.icon}</div>
                <div className="platform-info">
                  <h4>{platform.name}</h4>
                  <p>{platform.connected ? `Last sync: ${platform.lastSync}` : 'Not connected'}</p>
                </div>
                <div className="platform-status">
                  <div className={`status-dot ${platform.connected ? 'connected' : 'disconnected'}`}></div>
                </div>
                <button className={`connect-btn ${platform.connected ? 'connected' : 'disconnected'}`}>
                  {platform.connected ? 'Manage' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-section">
          <h3>Recent Sync Activity</h3>
          <div className="activity-list">
            {recentActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">
                  {activity.status === 'success' ? '✅' : '❌'}
                </div>
                <div className="activity-details">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sync Settings */}
        <div className="settings-section">
          <h3>Sync Settings</h3>
          <div className="settings-grid">
            <div className="setting-item">
              <label className="setting-label">
                <input type="checkbox" defaultChecked />
                <span>Auto-sync new content</span>
              </label>
            </div>
            <div className="setting-item">
              <label className="setting-label">
                <input type="checkbox" defaultChecked />
                <span>Auto-translate content</span>
              </label>
            </div>
            <div className="setting-item">
              <label className="setting-label">
                <input type="checkbox" />
                <span>Smart platform optimization</span>
              </label>
            </div>
            <div className="setting-item">
              <label className="setting-label">
                <input type="checkbox" defaultChecked />
                <span>Cross-posting enabled</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaSync
