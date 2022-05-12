import React from "react";
import '../styles/Home.css'

const Home = () => {

    return (
        <div className='text-box'>
        <h1 class="heading-primary">
          <span class='heading-primary-main'>Track your </span>
          <span class="heading-primary-sub">fitness</span>
        </h1>
      <a href='/register' class="btn btn-white">Start Here</a>
      </div>
    )
}

export default Home