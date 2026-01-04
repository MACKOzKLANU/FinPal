import './App.css'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'
import AuthLayout from './components/auth/AuthLayout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedLayout from './components/layout/ProtectedLayout'
import Dashboard from './components/dashboard/Dashboard'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout></AuthLayout>}>
          <Route path='/login' element={<LoginForm></LoginForm>}></Route>
          <Route path='/register' element={<RegisterForm></RegisterForm>}></Route>
        </Route>
        <Route element={<ProtectedLayout></ProtectedLayout>}>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
