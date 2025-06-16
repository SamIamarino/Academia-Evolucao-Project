import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter , Routes, Route } from 'react-router-dom'
import './index.css'
import AboutPage from './pages/AboutPage.jsx'
import MainPage from './pages/MainPage.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="aboutUs" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
