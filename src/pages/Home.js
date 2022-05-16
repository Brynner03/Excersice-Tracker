import React from "react";
import '../styles/Home.css'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = (authenticated, user, handleLogOut) => {

    return (
      <div className='text-box'>
        {/* <Navbar authenticated={authenticated} user={user} handleLogOut={handleLogOut} /> */}
        <h1 class="heading-primary">
          <span class='heading-primary-main'>Track your </span>
          <span class="heading-primary-sub">fitness</span>
        </h1>
        {/* <Link to ={'/workout'} > */}
      <a href="/workout" className="btn btn-white">Start Here</a>
        {/* </Link> */}
      </div>
    )
}

export default Home