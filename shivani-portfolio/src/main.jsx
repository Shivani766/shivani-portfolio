/**
 * main.jsx — React Entry Point
 *
 * This is the very first file React reads.
 * It grabs the <div id="root"> from index.html and renders
 * our entire <App /> component tree inside it.
 *
 * StrictMode helps catch bugs during development.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'   // Global styles + Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
