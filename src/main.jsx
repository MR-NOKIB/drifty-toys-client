import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>,
)
