import Link from "next/link";


export default function Navbar(){
    return(
        <nav>
        <div class="flex justify-between items-center h-24 mx-auto px-4 text-zinc-800 bg-zinc-50 dark:text-zinc-50 dark:bg-slate-900 overflow-hidden">
            <div z-40 flex flex-row items-center justify-center p-4>
                <Link href="/">Logo</Link>
            </div>
            <ul class="hidden md:flex z-40">
                <li class="p-4 font-medium hover:text-red-500 transition duration-150 ease-in-out"><Link href="/">Home</Link></li>
                <li class="p-4 font-medium hover:text-yellow-500 transition duration-150 ease-in-out"><Link href="/about">About</Link></li>
                <li class="p-4 font-medium hover:text-green-600 transition duration-150 ease-in-out"><Link href="/portfolio">Portfolio</Link></li>
                <li class="p-4 font-medium hover:text-blue-500 transition duration-150 ease-in-out"><Link href="/contact">Contact</Link></li>                   
            </ul>
        </div>
        </nav>
    );
}