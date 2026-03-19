import React from 'react'
import ReactDOM from 'react-dom/client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import App from './App.jsx'
import './index.css'
import { applyLanguage, getStoredLanguage } from './i18n.js'
import { applyTheme, getStoredTheme } from './theme.js'

gsap.registerPlugin(ScrollTrigger)
applyLanguage(getStoredLanguage())
applyTheme(getStoredTheme())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
