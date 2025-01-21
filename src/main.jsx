import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
    <Toaster />
  </StrictMode>,
)
