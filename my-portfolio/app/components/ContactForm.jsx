"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const userId = process.env.EMAIL_JS_USER;
const serviceId = process.env.EMAIL_JS_SERVICE;
const templateId = process.env.EMAIL_JS_TEMPLATE;

export default function ContactForm() {
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
        <div className="form-group mb-6">
          <input
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-zinc-700
        dark:text-zinc-200
        bg-white dark:bg-cyan-900 bg-clip-padding
        border border-solid border-zinc-300 dark:border-zinc-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-zinc-700 focus:bg-white focus:border-blue-400 dark:focus:border-blue-400 focus:outline-none"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            value={formData.name || ""}
            required
            autoComplete="on"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-6">
          <input
            className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-zinc-700
          dark:text-zinc-200
          bg-white dark:bg-gray-800 bg-clip-padding
          border border-solid border-zinc-300 dark:border-zinc-500
          rounded
          transition
          ease-in-out
          m-0
          focus:text-zinc-700 focus:bg-white dark:focus:border-blue-400 focus:border-blue-400 focus:outline-none"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email || ""}
            required
            autoComplete="on"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-zinc-700
                              dark:text-zinc-200
                              bg-white dark:bg-slate-800  bg-clip-padding
                              border border-solid border-zinc-300 dark:border-zinc-500
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-zinc-700 focus:bg-white dark:focus:border-blue-400 focus:border-blue-400 focus:outline-none
                            "
            id="message"
            name="message"
            placeholder="Write message..."
            rows="5"
            value={formData.message || ""}
            required
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          aria-label="Submit form button"
          className="
        w-full
        px-6
        py-2.5
        bg-blue-400
        rounded-md
        text-zinc-50
        font-medium          
        text-sm leading-snug uppercase
        shadow-md
        hover:bg-green-300 hover:shadow-lg
        hover:text-black
        focus:bg-green-300  focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green-300 active:shadow-lg
        transition
        duration-150
        ease-in-out"
        >
          {formData.loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
