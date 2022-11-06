import React from "react";
import laptop from "./laptop.jpg";
import { Helmet } from "react-helmet-async";

const Resume = () => {
  return (
    <div className="resume">
      <Helmet>
        <title>Resume</title>
        <meta name="description" content="view my resume" />
        <link rel="canonical" href="/resume" />
      </Helmet>
      <div>
        <div>
          <h1>About Me</h1>
          <p>Get a closer look at who I am</p>
        </div>

        <div className="lorem">
          Experienced and Motivated Customer Service Professional with expertise
          in operations strategies, expanding new business, and providing
          unparalleled customer support. Gained comprehensive experience and
          knowledge in customer relationship management, regulatory compliance,
          and general operational support. Experienced in managing customer
          communications and initiatives to realize improved customer service,
          satisfaction, and retention.
          <br />
          <br />
          <p>
            Pivoting into Technology and Software development through
            self-directed training and online classes on responsive web design
            and JavaScript data structures and algorithms to develop skills in
            HTML, CSS, JavaScript, React and learning multiple systems and
            efficient development techniques.
          </p>
        </div>
      </div>
      <div className="laptop">
        <img src={laptop} alt="laptop" />
      </div>
    </div>
  );
};

export default Resume;
