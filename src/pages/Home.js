import React from "react";
import '../styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className='text-box'>
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