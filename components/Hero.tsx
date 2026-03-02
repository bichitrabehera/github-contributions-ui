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
  const [theme, setTheme] = useState<Theme>("light");
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
    <section className="w-full font-mono bg-black text-white flex-1">
      <div className="max-w-3xl mx-auto px-6 md:px-0 pb-20 pt-14">
         <h1 className="text-green-500 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Display your GitHub contributions anywhere
        </h1>

        <p className="mt-5 text-sm md:text-lg text-gray-400 max-w-2xl">
          A plug-and-play React component that renders a GitHub-style
          contribution heatmap. Lightweight, customizable, and built for
          portfolios, dashboards, and developer websites.
        </p>

        <div className="mt-10 text-sm text-gray-500">
          <InstallBlock />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Weekly npm downloads:{" "}
            <span className="text-white font-medium">
              {typeof downloads === "number"
                ? downloads.toLocaleString()
                : "Loading..."}
            </span>
          </p>

          <Link
            href="https://github.com/bichitrabehera/github-contributions-ui#readme"
            target="_blank"
            className="text-gray-400 border border-white/40 rounded-full px-4 py-2 hover:text-white transition text-sm"
          >
            View on GitHub →
          </Link>
        </div>

        <div className="mt-12 max-w-md">
          <label className="text-sm text-gray-400 mb-2 block">
            Try it live
          </label>

          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter GitHub username (e.g. octocat)"
            className="w-full bg-neutral-900 border border-white/10
                       text-white placeholder-gray-500
                       px-4 py-3 rounded-lg
                       focus:outline-none focus:ring-2
                       focus:ring-green-600 transition"
          />
        </div>

        {/* Theme Selector */}
        <div className="mt-6 flex flex-wrap gap-3">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
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

        {/* Preview */}
        <div className="mt-12">
          <GithubActivity username={name} theme={theme} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
