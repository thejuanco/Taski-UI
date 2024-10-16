import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './NotFound'
import Login from './views/Auth/Login'
import Signin from './views/Auth/Signin'
import ForgotPassword from './views/Auth/ForgotPassword'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/auth/singin' element={<Login/>}/>
        <Route path='/auth/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/auth/signup' element={<Signin/>}/>
      </Routes>
    </>
  )
}

export default App
