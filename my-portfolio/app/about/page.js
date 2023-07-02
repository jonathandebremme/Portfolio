"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaMapPin,
  FaUniversity,
  FaHtml5,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiCss3, SiTailwindcss, SiExpress, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";

import Heading from "../components/Heading";
import { skillLinks } from "../constants";

export default function About() {
  return (
    <main>
      <Heading title="About" paragraph="A little about me" />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 1 }}
        className="flex flex-col justify-center items-center mt-52 pb-20 px-6 mx-auto lg:w-2/3"
      >
        <div className="flex flex-col min-w-0 break-words shadow-2xl rounded-xl bg-white dark:bg-slate-800">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-2/3 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.25,
                    }}
                  >
                    <Image
                      src="/img/profile_photo.jpg"
                      alt="Profile picture of Jonathan De Bremme"
                      className="shadow-2xl rounded-full h-auto align-middle border-none absolute -m-[136px] -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                      width={150}
                      height={150}
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-zinc-900 dark:text-zinc-50">
                Jonathan De Bremme
              </h3>
              <div className="inline-flex text-sm leading-normal mt-0 mb-2 text-zinc-400 font-bold uppercase">
                <FaMapPin className="mr-2 text-lg text-zinc-400 dark:text-zinc-400" />
                Ghent, Belgium
              </div>
              <div className="flex flex-row justify-center items-center mb-2 text-zinc-900 dark:text-zinc-50">
                <FaUniversity className="mr-2 text-lg text-zinc-400 dark:text-zinc-400" />
                HoGent
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-zinc-200 dark:border-zinc-400 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
                    Hello! My name is Jonathan. I enjoy building applications
                    with Javascript and broadening my knowledge of it&apos;s
                    frameworks and libraries. I graduated at&nbsp;
                    <a
                      href="https://www.hogent.be/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-75 hover:underline"
                    >
                      HoGent
                    </a>
                    &nbsp; with an associate degree Computer Programming and am
                    currently studying Applied Computer Science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Heading title="Skills" />
      <div className="flex flex-row flex-wrap justify-center items-center mb-40 mt-20 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="p-2 m-3 bg-orange-600 rounded-full shadow-xl">
            <Link
              href={skillLinks.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHtml5 className="w-7 h-7 text-white" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.1,
          }}
        >
          <div className="p-2 m-3 bg-blue-600 rounded-full shadow-xl">
            <Link
              href={skillLinks.css}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCss3 className="w-7 h-7 text-white" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
        >
          <div className="p-2 m-3 bg-yellow-500 rounded-full shadow-xl">
            <Link
              href={skillLinks.javascript}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoJavascript className="w-7 h-7 text-white" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
        >
          <div className="p-2 m-3 bg-zinc-600 rounded-full shadow-xl">
            <Link
              href={skillLinks.react}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact className="w-7 h-7 text-cyan-500" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.4,
          }}
        >
          <div className="p-2 m-3 bg-lime-600 rounded-full shadow-xl">
            <Link
              href={skillLinks.nodejs}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaNodeJs className="w-7 h-7 text-white" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
        >
          <div className="p-2 m-3 bg-gray-500 rounded-full shadow-xl">
            <Link
              href={skillLinks.express}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiExpress className="w-7 h-7 text-white" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.6,
          }}
        >
          <div className="p-2 m-3 bg-sky-400 rounded-full shadow-xl">
            <Link
              href={skillLinks.tailwind}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTailwindcss className="w-7 h-7 text-white" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.7,
          }}
        >
          <div className="p-2 m-3 bg-zinc-600 rounded-full shadow-xl">
            <Link
              href={skillLinks.nextjs}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiNextdotjs className="w-7 h-7 text-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
