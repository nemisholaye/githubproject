import React from "react";
import avatar from "./avatar.jpeg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="view my portfolio" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="description">
        <div className="hello">Hello, I am a frontend developer.</div>

        <h3 className="partDescription">
          I craft quality software, <br /> with keen attention to <br />
          details.
        </h3>
        <Link to={"about"}>
          <button className="homeButton">
            Click to view my Git Repositories
          </button>
        </Link>
      </div>
      <div className="img">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Home;
