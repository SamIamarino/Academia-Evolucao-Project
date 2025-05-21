import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename="/Academia-Evolucao-Project/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutUs" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
