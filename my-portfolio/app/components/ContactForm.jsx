"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const userId = process.env.EMAIL_JS_USER;
const serviceId = process.env.EMAIL_JS_SERVICE;
const templateId = process.env.EMAIL_JS_TEMPLATE;

export default function Homepage() {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    success: false,
    alertmessage: "",
    show: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      user_name: formData.name,
      from_name: formData.email,
      to_name: "jonathandebremme@hotmail.be",
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (result) => {
        setFormdata({
          loading: false,
          alertmessage: "Thanks! Will respond asap.",
          message: "",
          success: true,
          show: true,
        });
      },
      (error) => {
        setFormdata({
          alertmessage: `Something went wrong!`,
          success: false,
          show: true,
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          value={formData.name || ""}
          required
          autoComplete="on"
          onChange={handleChange}
        />
        <input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email || ""}
          required
          autoComplete="on"
          onChange={handleChange}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Write message..."
          rows="5"
          value={formData.message || ""}
          required
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" aria-label="Submit form button">
          {formData.loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
