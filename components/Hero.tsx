"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GithubActivity from "../Github";
import InstallBlock from "./InstallBlock";

const themes = ["light", "dark", "blue", "purple"] as const;

type Theme = (typeof themes)[number];

type NpmDownloadResponse = {
  downloads: number;
};

const Hero = () => {
  const [name, setName] = useState("bichitrabehera");
  const [theme, setTheme] = useState<Theme>("dark");
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchDownloads() {
      try {
        const res = await fetch(
          "https://api.npmjs.org/downloads/point/last-week/github-contributions-ui",
          { signal: controller.signal },
        );

        if (!res.ok) throw new Error("Request failed");

        const data: NpmDownloadResponse = await res.json();
        setDownloads(data.downloads);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Failed to fetch downloads", err);
        }
      }
    }

    fetchDownloads();
    return () => controller.abort();
  }, []);

  return (
    <section className="w-full bg-black text-[#c9d1d9] py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
            <span className="text-xs font-medium text-green-400">
              ✨ Zero-dependency React component
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
            Display Your GitHub<br className="hidden sm:block" />
            Contributions Anywhere
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            A lightweight, plug-and-play React component that renders a GitHub-style
            contribution calendar. Perfect for portfolios, dashboards, and developer
            websites. No third-party dependencies. Just React + TypeScript + Tailwind.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-white">
                {typeof downloads === "number"
                  ? (downloads)
                  : "—"}
                
              </div>
              <div className="text-sm text-gray-400">
                Downloads/week
              </div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-sm text-gray-400">
                Theme Options
              </div>
            </div>
          </div>

          <InstallBlock />
        </div>

        {/* Interactive Demo */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-3 block">
              Test with any GitHub username
            </label>

            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. octocat"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200"
            />

            {/* Theme Selector */}
            <div className="mt-6">
              <label className="text-sm font-medium text-gray-300 mb-3 block">
                Choose theme
              </label>
              <div className="grid grid-cols-4 gap-2">
                {themes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-3 py-2 capitalize rounded-lg transition-all duration-200 text-sm font-medium ${
                      theme === t
                        ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
              <p className="text-sm text-green-300">
                 <span className="text-gray-400">Currently showing contributions for</span> <span className="font-medium text-white">{name}</span>
              </p>
            </div>
          </div>

          {/* Preview */}
          <div className="  overflow-x-auto">
            <GithubActivity username={name} theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
