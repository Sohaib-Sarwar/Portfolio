import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Console messages (no console.clear: it wipes real errors during debugging)
console.log(
  '%cBUILT BY MUHAMMAD SOHAIB SARWAR',
  'color: #4FC3F7; font-size: 20px; font-weight: bold; font-family: monospace;'
)
console.log(
  '%cStealing code is not cool! If you wanna learn, reach out from the contact section.',
  'color: #aaa; font-size: 14px; font-family: monospace;'
)
console.log(
  '%c\u2192 https://www.linkedin.com/in/muhammadsohaibsarwar/',
  'color: #4FC3F7; font-size: 12px; font-family: monospace;'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
