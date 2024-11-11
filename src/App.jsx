import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Login from './views/Auth/Login'
import SignUp from './views/Auth/SignUp'
import ForgotPassword from './views/Auth/ForgotPassword'
import SendEmail from './views/Auth/SendEmail'
import ConfirmUser from './views/Auth/ConfirmUser'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/auth/singin' element={<Login/>}/>
        <Route path='/auth/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/auth/signup' element={<SignUp/>}/>
        <Route path='/auth/send-email' element={<SendEmail/>}/>
        <Route path='/auth/confirm-user?status=success' element={<ConfirmUser/>}/>
      </Routes>
    </>
  )
}

export default App
