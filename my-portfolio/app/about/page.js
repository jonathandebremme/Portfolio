import {
  FaMapPin,
  FaUniversity,
  FaHtml5,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiCss3, SiTailwindcss, SiExpress, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import Heading from "../components/Heading";

export default function About() {
  return (
    <main className="min-h-screen p-24">
      <Heading title="About" paragraph="A little about me" />
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
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-zinc-900 dark:text-zinc-50">
          Skills
        </h3>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center mb-40 mt-20 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="p-2 m-3 bg-orange-600 rounded-full shadow-xl">
          <FaHtml5 className="w-7 h-7 text-white" />
        </div>
        <div className="p-2 m-3 bg-blue-600 rounded-full shadow-xl">
          <SiCss3 className="w-7 h-7 text-white" />
        </div>
        <div className="p-2 m-3 bg-yellow-500 rounded-full shadow-xl">
          <IoLogoJavascript className="w-7 h-7 text-white" />
        </div>
        <div className="p-2 m-3 bg-zinc-600 rounded-full shadow-xl">
          <FaReact className="w-7 h-7 text-white" />
        </div>
        <div className="p-2 m-3 bg-lime-600 rounded-full shadow-xl">
          <FaNodeJs className="w-7 h-7 text-white" />
        </div>
        <div className="p-2 m-3 bg-gray-500 rounded-full shadow-xl">
          <SiExpress className="w-7 h-7 text-white" />
        </div>
        <div className="p-2 m-3 bg-sky-400 rounded-full shadow-xl">
          <SiTailwindcss className="w-7 h-7 text-white" />
        </div>
        <div className="p-2 m-3 bg-zinc-600 rounded-full shadow-xl">
          <SiNextdotjs className="w-7 h-7 text-white" />
        </div>
      </div>
    </main>
  );
}
