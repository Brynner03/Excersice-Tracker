import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { CheckSession } from './services/auth'
import Home from './pages/Home'


function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState({
    userName: '',
    id: NaN
  })

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }


  const handleLogOut = () =>{
    setUser(null)
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  },[])

  return (
    <Router>
      {/* <Nav authenticated={authenticated} user={user} handleLogOut={handleLogOut} /> */}
      <main>
        <Routes>
          {/* <Route path='/' exact element={<Home/>} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
