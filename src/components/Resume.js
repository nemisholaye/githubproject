import React from "react";
import laptop from "./laptop.jpg";

const Resume = () => {
  return (
    <div className="resume">
      <div>
        <div>
          <h1>About Me</h1>
          <p>Get a closer look at who I am</p>
        </div>

        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloremque ipsam, in aspernatur consequuntur, eligendi expedita
          officiis, tenetur vero velit provident illo architecto delectus
          necessitatibus. Optio quo quam, quos officia natus voluptatibus
          ratione ex eos laborum accusamus explicabo quibusdam deleniti quas in
          voluptatum iure magni? Sapiente obcaecati quis assumenda maxime unde.
          Harum obcaecati molestias expedita asperiores amet voluptates,
          voluptas temporibus vel repellendus aspernatur velit ea perferendis
          modi soluta numquam ab esse aperiam dolor provident iusto alias!
          Consectetur, cum quos quae, aliquam at veniam, vitae tempore culpa
          voluptatem soluta nam dolorem unde possimus! Minus soluta officia
          facere corporis voluptas. Eos, suscipit?
        </div>
      </div>
      <div className="laptop">
        <img src={laptop} alt="laptop" />
      </div>
    </div>
  );
};

export default Resume;
