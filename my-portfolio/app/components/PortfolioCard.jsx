import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function PortfolioCard({
  title,
  imageUrl,
  alt,
  description,
  repo,
  tags,
}) {
  return (
    <div className="max-w-screen overflow-hidden rounded-lg shadow-2xl bg-white dark:bg-slate-800">
      <div
        className="bg-cover bg-center h-48 w-full lg:w-96"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        alt={alt}
      >
        <div className="w-full h-full flex justify-center items-center bg-gradient-to-r from-blue-400 to-green-300 opacity-60"></div>
      </div>
      <div className="flex flex-col rounded-lg justify-center w-full h-full hover:shadow-2xl bg-gradient-to-r from-blue-400 to-green-300 opacity-60 transition duration-300 ease-in-out hover:opacity-90"></div>
      <div className="px-6 py-4 h-20">
        <div className="font-bold text-xl mb-2 text-zinc-900 dark:text-zinc-50">
          {title}
        </div>
        <p className="text-zinc-800 dark:text-zinc-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-3 mt-10">
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              className="inline-flex justify-between items-center bg-zinc-100 dark:bg-zinc-50 shadow-md rounded-full px-3 py-1 text-sm font-semibold text-zinc-800 mr-2 mb-2"
            >
              <p>{tag}</p>
            </span>
          );
        })}
      </div>
      <div className="inline-flex px-6 pt-4 pb-3">
        <p className="text-zinc-800 dark:text-zinc-50 text-base my-2">
          Project Link:
        </p>
        <Link
          href={repo}
          target="_blank"
          aria-label="Jonathan De Bremme | Project Repository Link"
          className="text-zinc-800 dark:text-zinc-50 inline-flex items-center font-medium text-primary-600 hover:text-blue-400 dark:hover:text-blue-400 transition duration-300 ease-in-out"
        >
          <FaGithub className="ml-5" />
        </Link>
      </div>
    </div>
  );
}
