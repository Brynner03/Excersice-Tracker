import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
// import Workout from "../components/Workout";

const Profile = ({user, authenticated}) => {
    return user && authenticated ? (
        <div className="profile">
            {/* <Workout /> */}
        </div>
    ) : (
        <div>
            <h1> Oops we don't know who you are. Please Login or Register.</h1>
        </div>
    )
}

export default Profile