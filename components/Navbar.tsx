"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-black via-black to-green-950/20 backdrop-blur-sm font-sans sticky top-0 z-50 border-b border-green-900/30">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          
          <h1 className="text-base font-semibold text-white tracking-tight">
            GitHub Contributions UI
          </h1>
        </div>

        <Link
          href="https://github.com/bichitrabehera/github-contributions-ui.git"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-gray-400 hover:text-green-400 hover:bg-green-950/20 transition-all duration-200"
          title="View on GitHub"
        >
          <FaGithub size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
