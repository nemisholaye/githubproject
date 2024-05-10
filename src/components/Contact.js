import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <section id="contactPage">
    <div className="contactWrapper">
      <h2 className="contact-title">Contact Me</h2>
      <span className="contact-text">
        Please fill out this form below to discuss any work appointment
      </span>
      <div className="contactForm">
        <form id="contact-form" method="post" action="submit.php">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
        </form>
      </div>

      <button className="contact-btn" type="submit">
        Submit
      </button>
    </div>
  </section>

  );
};

export default Contact;
