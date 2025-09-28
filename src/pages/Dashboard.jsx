import React from 'react'
import Header from '../components/Header'
import StatsGrid from '../components/StatsGrid'
import CloneGrid from '../components/CloneGrid'
import QuickActions from '../components/QuickActions'
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-page fade-in">
      <Header />
      
      <div className="dashboard-content">
        <section className="welcome-section">
          <h1>Welcome to Your AI Empire</h1>
          <p>Your digital clones are actively managing your business</p>
        </section>

        <StatsGrid />
        <CloneGrid />
        <QuickActions />
      </div>
    </div>
  )
}

export default Dashboard
