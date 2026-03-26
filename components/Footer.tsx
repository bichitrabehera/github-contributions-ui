import React from "react";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaGlobe } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-black via-black to-green-950/10 border-t border-green-900/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              About
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A zero-dependency GitHub contributions component built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/bichitrabehera/github-contributions-ui#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/package/github-contributions-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  NPM Package
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/bichitrabehera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  More Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/bichitrabehera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-green-950/20"
                title="GitHub"
              >
                <FaGithub size={18} />
              </Link>
              <Link
                href="https://x.com/bichitradotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-green-950/20"
                title="Twitter"
              >
                <FaXTwitter size={18} />
              </Link>
              <Link
                href="https://bichitrabehera.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-green-950/20"
                title="Portfolio"
              >
                <FaGlobe size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-900/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              © {currentYear} github-contributions-ui. All rights reserved.
            </p>
            <Link
              href="https://github.com/bichitrabehera/github-contributions-ui/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              MIT License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
