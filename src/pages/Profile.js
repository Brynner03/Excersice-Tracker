import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import Workout from "../components/Workout";
import Day from "../components/Day";
import '../styles/Profile.css'

const Profile = ({user, authenticated, setUser}) => {
    return user && authenticated ? (
        <div className="profile">
            <Day user={user} authenticated={authenticated} setUser={setUser} />
            <Workout user={user} authenticated={authenticated} setUser={setUser} />
        </div>
    ) : (
        <div>
            <h1> Oops we don't know who you are. Please Sign in or Register an account with us.</h1>
        </div>
    )
}

export default Profile