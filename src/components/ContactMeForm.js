import "../styles/ContactMeForm.css";

import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/7891adf0-beb3-11ed-b06b-6be7058b1424";

const ContactMeForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  return (
    <div className="form">
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
        <label>Name</label>
        <input type="text" placeholder="Your name" name="name" required />
        <label>Email</label>
        <input type="email" placeholder="Email" name="email" required />

        <label>Message</label>
        <textarea rows="6" placeholder="Your message" name="message" required />
        <button className="btn" type="submit">
          Send a Message
        </button>
        {submitted ? (
          <div>
            <p>Thanks for reaching out. I'll be in touch soon.</p>
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
};

export default ContactMeForm;
