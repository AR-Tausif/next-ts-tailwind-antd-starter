import { Github, Link2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl uppercase text-center font-bold">
        Hello <span className="text-purple-700">Started</span> pack
      </h1>
      <h4 className="text-center p-1">
        <b>Technologies :</b>
        <ul className="flex gap-2.5 mt-2">
          {/* Nextjs */}
          <li>
            <span className="inline-flex items-center justify-center rounded-6 bg-black font-medium px-2.5 py-0.5 text-gray-100 dark:bg-emerald-700 dark:text-emerald-100">
              <p className="text-sm whitespace-nowrap">Nextjs 15.3</p>
            </span>
          </li>
          {/* tailwindcss */}
          <li>
            <span className="inline-flex items-center justify-center rounded-6 bg-sky-500 font-medium px-2.5 py-0.5 text-gray-50 dark:bg-emerald-700 dark:text-emerald-100">
              <p className="text-sm whitespace-nowrap">Tailwindcss</p>
            </span>
          </li>
          {/* Ant design */}
          <li>
            <span className="inline-flex items-center justify-center rounded-6 bg-blue-500 font-medium px-2.5 py-0.5 text-gray-100 dark:bg-emerald-700 dark:text-emerald-100">
              <p className="text-sm whitespace-nowrap">Ant Design</p>
            </span>
          </li>
        </ul>
      </h4>
      <Link href="https://www.github.com/AR-Tausif" className="group">
        <h4 className="text-center p-1 flex items-center gap-x-3 font-bold ">
          <p className="bg-gray-300 p-1 rounded-full text-center">
            <Github />
          </p>
          Developed by: Tausif Ahmed
          <Link2 className="hidden text-gray-600 group-hover:block" />
        </h4>
      </Link>
    </div>
  );
}
