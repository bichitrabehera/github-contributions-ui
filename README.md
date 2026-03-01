# 📅 github-contributions-ui

A clean, zero-dependency GitHub Contributions Calendar built from scratch with **React** + **TypeScript** + **Tailwind CSS**.

No third-party calendar libraries. Just fetch, compute, and render — exactly the way you want it.

---

## ✨ Features

- 🟩 **GitHub-style contribution heatmap** — faithful recreation of the real thing
- 🌙 **Auto light & dark theme** — detects your `dark` class on `<html>` automatically
- ⚡ **Zero calendar libraries** — custom grid built from scratch, fully under your control
- 📱 **Responsive** — scrolls horizontally on small screens, never squishes
- 🎯 **Hover tooltips** — shows exact date and contribution count on hover
- 💀 **Skeleton loader** — smooth loading state while data fetches
- 🧩 **Drop-in ready** — one file, one prop

---

## 📸 Preview

> Add a screenshot or GIF here

```
![Preview](./preview.png)
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/github-contributions-ui.git
cd github-contributions-ui
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

---

## 🧩 Usage

Copy the component from:

```
src/components/GithubActivity.tsx
```

Then import and use it anywhere in your project:

```tsx
import GithubActivity from "./components/GithubActivity";

export default function App() {
  return (
    <main>
      <GithubActivity username="your-github-username" />
    </main>
  );
}
```

That's it. No API keys. No configuration. Just your GitHub username.

---

## ⚙️ Props

| Prop       | Type     | Required | Description                        |
|------------|----------|----------|------------------------------------|
| `username` | `string` | ✅        | Your GitHub username               |

---

## 🛠 How It Works

1. **Fetches** contribution data from [`github-contributions-api`](https://github.com/grubersjoe/github-contributions-api) using `?y=last` to get the rolling last-12-months window
2. **Builds** a Sunday-aligned 52-week grid ending today
3. **Renders** each day as a `13×13px` div colored by contribution level (0–4)
4. **Detects** your app's dark/light mode via a `MutationObserver` on `document.documentElement`

---

## 🏗 Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/) (with `"use client"`)
- [`github-contributions-api`](https://github.com/grubersjoe/github-contributions-api) — data source

---

## 🌐 Live Demo

> Deploy on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) in one click.

Add your live demo link here → **[your-demo-url.vercel.app](#)**

---

## 🎯 Use Cases

- Developer portfolios
- Personal dashboards
- Resume / CV websites
- GitHub profile pages
- Any React app that wants a contribution graph

---

## 📁 Project Structure

```
src/
└── components/
    └── GithubActivity.tsx   ← the entire component, self-contained
```

---

## 🤝 Contributing

Pull requests are welcome! If you find a bug or want to add a feature (custom themes, click handlers, etc.), feel free to open an issue first to discuss it.

---

## 📄 License

MIT License © 2026 Your Name

---

> Built with ❤️ — no npm install required to use it.
