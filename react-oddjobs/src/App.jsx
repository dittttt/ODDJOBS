import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'
import Decision from './pages/Decision'
import Change from './pages/ChangePassword'
import Profile from './pages/ProfileCustomer'
import './App.css'

function App() {

  return (
  <>
    <Routes>
      <Route path='/login' element={ <Login></Login> }></Route>
      <Route path='/forgot' element={ <ForgotPassword></ForgotPassword> }></Route>
      <Route path='/register' element={ <Register></Register> }></Route>
      <Route path='/decision' element={ <Decision></Decision> }></Route>
      <Route path='/change' element={ <Change></Change> }></Route>
      <Route path='/profile' element={ <Profile></Profile> }></Route>
    </Routes>
  </>
  )
}

export default App
