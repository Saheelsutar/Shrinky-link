import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-indigo-300 p-3">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <Image width={50} height={100} unoptimized src="/img_logo.png" className="h-9 px-2" alt="Shrinky Link Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Shrinky Link
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop & Mobile Menu */}
        <div
          className={`absolute z-10 top-16 left-0 w-full bg-indigo-300 md:static md:w-auto md:flex md:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 border border-gray-100 rounded-lg md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shorten"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Shorten
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
