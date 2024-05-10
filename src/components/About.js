import React from "react";
import meetme from "./uk-black-tech-uZyE3w7khzw-unsplash.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>About</title>
        <meta name="description" content="get to know me" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <div>
          <h1>About Me</h1>
          <p>Delve into my journey and passions</p>
        </div>

        <div className="abt-desc">
          My foray into the world of technology marks a thrilling transition,
          fueled by a fervent desire for continuous growth and innovation.
          Through immersive self-study and rigorous training in web development,
          I am honing my skills in HTML, CSS, JavaScript, and React, while
          delving into the intricacies of data structures and algorithms.
          <br />
          <br />
          <p>
            Eager to carve my path in the ever-evolving tech landscape, I am
            committed to embracing challenges head-on, pushing boundaries, and
            charting new territories of knowledge and expertise. Join me on this
            exhilarating journey of discovery and transformation.
          </p>
        </div>
      </div>
      <div >
        <img className="meetme" src={meetme} alt="meet me" />
      </div>
    </div>
  );
};

export default About;
