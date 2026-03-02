"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-black font-mono border-b border-white/10">
      <div className="max-w-3xl mx-auto px-6 md:px-0 py-4 flex items-center justify-between">
        <h1 className="text-sm md:text-base font-mono font-medium text-white tracking-tight">
          GitHub Contributions UI
        </h1>

        <Link
          href="https://github.com/bichitrabehera/github-contributions-ui.git"
          target="_blank"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          <FaGithub size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
