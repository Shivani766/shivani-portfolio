/**
 * App.jsx — Root Component
 *
 * This is the main "shell" of the app.
 * It imports and renders the Home page (which contains all sections).
 * If you add routing later (React Router), you'd add <Routes> here.
 */

import React from 'react'
import Home from './pages/Home.jsx'

function App() {
  return (
    // The outer div handles overflow so nothing bleeds horizontally
    <div className="min-h-screen overflow-x-hidden">
      <Home />
    </div>
  )
}

export default App
