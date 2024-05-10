import React from "react";
import profile from "./Photo Resizer profile picture .jpeg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="My Portfolio" />
        <link rel="canonical" href="/home" />
      </Helmet>
      <div className="description">
        
          <img className="image" src={profile} alt="profile picture" />
          
        <h3>
          I'm <span>Nemi Sholaye,</span> Frontend Developer 
        </h3>
        <div className="desc">
          I specialize in creating engaging user experiences and building
          responsive web applications that leave a lasting impression
        </div>
        <Link to={"git-repo"}>
          <button className="homeButton">
           Git Repositories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
