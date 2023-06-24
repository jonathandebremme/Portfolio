"use client";

import Link from "next/link";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

export default function Homepage() {
  return (
    <div
      id="homepage"
      className="absolute top-0 flex flex-row justify-center items-center w-full h-full bg-transparent z-30 px-6 py-12 md:px-12 text-center lg:text-left"
    >
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="mt-12 lg:mt-0">
            <div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                I&apos;m Jonathan
                <br />I build
                <span className="text-blue-400 hover:text-green-300 transition duration-150 ease-in-out">
                  <TypeAnimation
                    sequence={[" websites", 2000, " apps", 2000]}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    className="ml-3 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight"
                  />
                </span>
              </h1>
            </div>
            <div>
              <a
                className="inline-block px-7 py-3 mr-2 border-2 border-blue-400 bg-blue-400 text-zinc-50 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-zinc-50 hover:text-green-300 hover:shadow-lg hover:border-green-300 focus:bg-zinc-50 focus:text-green-300 focus:border-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-50 active:shadow-lg transition duration-150 ease-in-out"
                href="./resume.pdf"
                role="button"
                aria-label="Resume link button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <Link
                className="inline-block px-7 py-3 mr-2 bg-transparent border-2 border-blue-400 bg-zinc-50 text-blue-400 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg hover:text-zinc-50 hover:border-green-300 focus:bg-green-300 focus:border-green-300 focus:text-zinc-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-lg transition duration-150 ease-in-out"
                href="/portfolio"
                role="button"
                aria-label="Portfolio link button"
              >
                Portfolio
              </Link>
            </div>
          </div>
          {/*       <div className="mb-12 lg:mb-0 flex flex-col justify-center items-center">
        <Image
          src="/img/Profile_pic.jpg"
          alt="Profile picture of Jonathan De Bremme"
          width={400}
          height={400}
          className="dark:grayscale rounded-full mx-auto w-1/2 h-1/2 md:w-2/3 md:h-2/3 shadow-2xl"
        />
      </div> */}
        </div>
      </div>
    </div>
  );
}
