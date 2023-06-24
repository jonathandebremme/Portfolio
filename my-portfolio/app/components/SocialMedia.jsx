import { socialMediaLinks } from "../constants";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <ul className="inline-flex text-blue-400">
      <li className="px-5 text-blue-400 hover:text-green-400 transition duration-150 ease-in-out">
        <Link
          href={socialMediaLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
      </li>
      <li className="px-5 text-blue-400 hover:text-green-400 transition duration-150 ease-in-out">
        <Link
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </li>
    </ul>
  );
}
