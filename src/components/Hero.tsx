"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GithubActivity } from "github-contributions-ui";

const themes = ["light", "dark", "blue", "purple"];

const Hero = () => {
  const [name, setName] = useState("bichitrabehera");
  const [theme, setTheme] = useState<"light" | "dark" | "blue" | "purple">(
    "light",
  );

  return (
    <section className="w-full bg-black h-screen text-white flex-1">
      <div className="max-w-3xl mx-auto px-6 md:px-0 py-20 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight text-green-600">
          GitHub Contributions UI
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl">
          A minimal Next.js + Tailwind GitHub contributions component that is
          easy to use and customize.
        </p>

        {/* Username Input */}
        <div className="mt-8 max-w-md">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter GitHub username..."
            className="w-full bg-neutral-900 border border-white/10 
                       text-white placeholder-gray-500 
                       px-4 py-3 
                       focus:outline-none focus:ring-2 
                       focus:ring-green-600 transition"
          />
        </div>

        {/* Theme Selector */}
        <div className="mt-6 flex flex-wrap gap-3">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t as any)}
              className={`px-4 py-1 capitalize transition ${
                theme === t
                  ? "bg-green-600 text-white"
                  : "bg-neutral-800 text-gray-400"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Activity */}
        <div className="mt-12 overflow-x-auto flex flex-col">
          <GithubActivity username={name} theme={theme} />
        </div>

        {/* README Link */}
        <div className="mt-10 text-right">
          <Link
            href="https://github.com/bichitrabehera/github-contributions-ui#readme"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition duration-200"
          >
            <FaGithub size={16} />
            View Documentation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
