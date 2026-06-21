import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import UserLogin from '../src/pages/UserLogin'
import UserSignup from '../src/pages/Usersignup'
import CaptainLogin from '../src/pages/Captainlogin'
import Captainsign from '../src/pages/CaptainsignUp'
import { UserDataContext } from '../src/context/UserContext'

const App = () => {
  const ans = useContext(UserDataContext)
  console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path='/sign' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-sign' element={<Captainsign />} />

      </Routes>

    </div>
  )
}

export default App
