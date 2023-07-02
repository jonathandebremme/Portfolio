"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
          alertmessage: "Thanks! I will respond as soon as possible.",
          message: "",
          success: true,
          show: true,
        });
      },
      (error) => {
        setFormdata({
          alertmessage: `Something went wrong! Please try again later.`,
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
    <div className="max-w-[700px] mx-auto">
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
        bg-white dark:bg-slate-800 bg-clip-padding
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
          bg-white dark:bg-slate-800 bg-clip-padding
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
        {formData.show && formData.success ? (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
            className="mt-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative"
            role="alert"
          >
            <span className="block sm:inline">{formData.alertmessage}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                aria-label="Close button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => setFormdata({ show: false })}
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </motion.div>
        ) : formData.show && !formData.success ? (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
            className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative"
            role="alert"
          >
            <span className="block sm:inline">{formData.alertmessage}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                aria-label="Close button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => setFormdata({ show: false })}
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </motion.div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
