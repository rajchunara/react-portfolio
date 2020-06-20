import React from "react";
import "./contact.css";

export default function ContactComponent() {
  return (
    <div id="contactCmp" className="contact-container">
      <div className="contact-title">Contact</div>

      <div className="contact-content">
        <div className="contact-btn email-btn">
          <a href="mailto:rajchunara777@gmail.com">Email</a>
        </div>
        <button
          className="contact-btn"
          onClick={() =>
            window.open("https://www.linkedin.com/in/raj-chunara-2930b884/")
          }
        >
          {" "}
          LinkedIn{" "}
        </button>
        <button
          className="contact-btn"
          onClick={() => window.open("https://github.com/rajchunara")}
        >
          GitHub
        </button>
        <button
          className="contact-btn"
          onClick={() => window.open("https://codepen.io/raj-chunara")}
        >
          Codepen
        </button>
      </div>
    </div>
  );
}
