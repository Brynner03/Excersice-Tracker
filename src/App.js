import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { CheckSession } from './services/auth'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Register from './pages/Register'
import Login from './pages/Login';
import WorkoutPage from './pages/WorkoutPage'


function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState({
    userName: '',
    day_id: '',
    week_id: '',
    workout_id: '',
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
      <Navbar authenticated={authenticated} user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/register' exact element={<Register />} />
          <Route path="/login" exact element={<Login setUser={setUser} toggleAuthenticated={toggleAuthenticated} />} />
          <Route path='/workout' exact element={<WorkoutPage user={user} toggleAuthenticated={toggleAuthenticated} />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
