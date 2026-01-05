
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/custom.css'

// restore theme preference
const saved = localStorage.getItem('theme')
if (saved) document.documentElement.setAttribute('data-bs-theme', saved)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
