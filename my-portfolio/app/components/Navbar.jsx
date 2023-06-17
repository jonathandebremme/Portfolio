import Link from "next/link";


export default function Navbar(){
    return(
        <nav>
        <div className="flex justify-between items-center h-24 mx-auto overflow-hidden">
            <div className="z-40 flex flex-row items-center justify-center p-4">
                <Link href="/">Logo</Link>
            </div>
            <ul className="hidden md:flex z-40">
                <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out"><Link href="/">Home</Link></li>
                <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out"><Link href="/about">About</Link></li>
                <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out"><Link href="/portfolio">Portfolio</Link></li>
                <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out"><Link href="/contact">Contact</Link></li>                   
            </ul>
        </div>
        </nav>
    );
}