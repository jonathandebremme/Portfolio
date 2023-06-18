import Link from "next/link";

import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center h-24 mx-auto px-4 text-zinc-800 bg-zinc-50 dark:text-zinc-50 dark:bg-slate-900 overflow-hidden">
        <div className="z-40 flex flex-row items-center justify-center p-4">
          <Link href="/">
            <Logo width="75" height="75" />
          </Link>
        </div>
        <ul className="hidden md:flex z-40">
          <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
