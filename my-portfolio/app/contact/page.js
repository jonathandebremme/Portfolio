"use client";

import { IoIosMail } from "react-icons/io";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion";

import ContactForm from "../components/ContactForm";
import Heading from "../components/Heading";

export default function Contact() {
  return (
    <main>
      <Heading title="Contact" paragraph="Let's get in touch!" />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 1 }}
        className="container mt-52 md:mt-32 px-6 mx-auto lg:w-2/3"
      >
        <div className="container text-slate-800 px-4 md:px-12 relative top:0 md:top-20">
          <div className="block rounded-xl mt-[-100px] bg-white dark:bg-slate-800 shadow-xl py-10 md:py-12 px-4 md:px-6">
            <div className="grid grid-cols-3 mb-12 max-w-[700px] mx-auto">
              <div className="mb-12 lg:mb-0 text-center mx-auto">
                <a href="mailto:jonathandebremme@hotmail.be">
                  <IoIosMail className="w-6 h-6 md:w-12 md:h-12 text-blue-400 mb-6 mx-auto hover:text-green-300" />
                </a>{" "}
                <h6 className="font-medium text-sm md:text-md text-zinc-800 dark:text-zinc-50">
                  <a href="mailto:jonathandebremme@hotmail.be">Email Me</a>
                </h6>
              </div>
              <div className="mb-12 lg:mb-0 text-center mx-auto">
                <IoLocationSharp className="w-6 h-6 md:w-12 md:h-12 text-blue-400 mb-6 mx-auto hover:text-green-300" />
                <h6 className="font-medium text-sm md:text-md text-zinc-800 dark:text-zinc-50">
                  GHENT, BE
                </h6>
              </div>
              <div className="mb-6 md:mb-0 text-center mx-auto">
                <a href="tel:+32472549234">
                  <IoCallSharp className="w-6 h-6 md:w-12 md:h-12 text-blue-400 mb-6 mx-auto hover:text-green-300" />
                </a>
                <h6 className="font-medium text-sm md:text-md text-zinc-800 dark:text-zinc-50">
                  <a href="tel:+32472549234">Call Me</a>
                </h6>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
