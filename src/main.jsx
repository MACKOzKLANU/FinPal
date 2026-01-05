import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { BudgetProvider } from './contexts/BudgetContext.jsx'


// Custom css styles

import './styles/bootstrap.js'

import './styles/bootstrap.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BudgetProvider>
        <App />
      </BudgetProvider>
    </AuthProvider>
  </StrictMode>
)
