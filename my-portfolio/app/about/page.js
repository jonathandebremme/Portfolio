import Image from "next/image";
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
    <main>
      <Heading title="About" paragraph="A little about me" />
      <div className="flex flex-col justify-center items-center mt-52 pb-20 px-6 mx-auto lg:w-2/3">
        <div className="flex flex-col min-w-0 break-words shadow-2xl rounded-xl bg-white dark:bg-slate-800">
          <div className="px-6">
            {/*             <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-2/3 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <Image
                    src="/img/Profile_pic.jpg"
                    alt="Profile picture of Jonathan De Bremme"
                    className="shadow-2xl rounded-full h-auto align-middle border-none absolute -m-[136px] -ml-20 lg:-ml-16"
                    style={{ maxWidth: "150px" }}
                    width={150}
                    height={150}
                    priority
                  />
                </div>
              </div>
            </div> */}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Heading title="Skills" />
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
