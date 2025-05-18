import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/aboutUs',
    element: <AboutPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
