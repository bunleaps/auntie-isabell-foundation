// components/Navbar.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { link_name: "Home", link_path: "/" },
    { link_name: "About Us", link_path: "/about" },
    { link_name: "Programs", link_path: "/programs" },
    { link_name: "How to Qualify", link_path: "/how-to-qualify" },
    { link_name: "Contact", link_path: "/contact" },
  ];

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/logos/black2.png"
              alt="Logo"
              width={200}
              height={139}
              className="mr-3 w-32 h-20 md:w-40 md:h-28"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-end">
          <ul className="flex space-x-6 list-none m-0 p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link_path} legacyBehavior>
                  <span
                    className={`text-black cursor-pointer px-4 text-lg font-medium hover:text-gray-600 transition-colors duration-300 ${
                      pathname === link.link_path
                        ? "underline underline-offset-8"
                        : ""
                    }`}
                  >
                    {link.link_name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-black" onClick={() => setIsOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center mt-8">
          {navLinks.map((link, index) => (
            <li key={index} className="my-2">
              <Link href={link.link_path} legacyBehavior>
                <span
                  className={`text-black text-lg font-medium cursor-pointer hover:text-gray-600 transition-colors duration-300 ${
                    pathname === link.link_path
                      ? "underline underline-offset-8"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.link_name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
