import React from "react";
import Link from "next/link";
import { FaGlobe, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full bg-black border-t border-white/10 z-50">
      <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between text-sm">
        <p className="text-gray-500">
          © {new Date().getFullYear()} github-contributions-ui
        </p>

        <div className="flex gap-4">
          <Link
            href="https://x.com/bichitradotdev"
            target="_blank"
            className="text-gray-500 hover:text-white transition duration-200"
          >
            <FaXTwitter size={18} />
          </Link>
          <Link
            href="https://bichitrabehera.vercel.app"
            target="_blank"
            className="text-gray-500 hover:text-white transition duration-200"
          >
            <FaGlobe size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
