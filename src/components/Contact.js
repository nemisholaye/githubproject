import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="contact me" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div>
        <h3>Get in Touch</h3>
      </div>
      <div className="subContact">
        <div>Want to work together or have any questions?</div>
        <div>
          <a href="mailto:onyinyechukwuma14@gmail.com">Say Hello 🖐️</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
