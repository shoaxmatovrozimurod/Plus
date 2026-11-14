// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. CSS FAYLNI ULASH (Dizayn ishlashi uchun)
import './index.css' 

// 2. TARJIMA FAYLINI ULASH (Konsoldagi sariq xatoni yo'qotish uchun)
// Agar i18n.js faylingiz locales papkasida bo'lsa:
import './locales/i18next.jsx' 
// Yoki i18n papkasida bo'lsa: import './i18n/i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
