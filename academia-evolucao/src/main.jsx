import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';   // ⬅️ trocado
import './index.css';
import App from './App.jsx';
import AboutPage from './pages/AboutPage.jsx';

const router = createHashRouter([
  { path: '/', element: <App /> },
  { path: '/aboutUs', element: <AboutPage /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
