"use client";

import { useState } from "react";
import Link from "next/link";
import  GithubActivity  from "../Github";
import InstallBlock from "./InstallBlock";

const themes = ["light", "dark", "blue", "purple"];

const Hero = () => {
  const [name, setName] = useState("bichitrabehera");
  const [theme, setTheme] = useState<
    "light" | "dark" | "blue" | "purple"
  >("light");

  return (
    <section className="w-full bg-black text-white flex-1">
      <div className="max-w-3xl mx-auto px-6 md:px-0 pb-20 pt-12 w-full">
        <h1 className="text-green-500 text-3xl l md:text-4xl font-bold tracking-tight leading-tight">
          GitHub Contributions UI
        </h1>

        <p className="mt-4 text-sm md:text-lg text-gray-400 max-w-2xl">
          A plug-and-play React component for displaying GitHub contribution
          graphs. Built with Next.js and Tailwind customizable, lightweight,
          and ready to drop into your portfolio or dashboard.
        </p>

        <div className="mt-10 text-sm text-gray-500">
            <InstallBlock />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
          
          <Link
            href="https://github.com/bichitrabehera/github-contributions-ui#readme"
            target="_blank"
            className="text-gray-400 border rounded-full border-white/40 px-4 py-2 hover:text-white text-sm transition"
          >
            Docs →
          </Link>
        </div>

        <div className="mt-10 max-w-md">
          <label className="text-sm text-gray-400 mb-2 block">
            Try the component
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter GitHub username..."
            className="w-full bg-neutral-900 border border-white/10
                       text-white placeholder-gray-500
                       px-4 py-3 rounded-lg
                       focus:outline-none focus:ring-2
                       focus:ring-green-600 transition"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t as any)}
              className={`px-4 py-1 capitalize rounded-full transition ${
                theme === t
                  ? "bg-green-600 text-white"
                  : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <GithubActivity username={name} theme={theme} />
        </div>

        
      </div>
    </section>
  );
};

export default Hero;