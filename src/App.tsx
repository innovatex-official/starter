import { useState, useEffect } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
        <button
          type="button"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {isDark ? (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Centered Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <div className="flex flex-col items-center">
          {/* Centric Logo */}
          <div className="mb-6">
            <img
              src="/InnovateX.png"
              alt="InnovateX"
              className="hidden h-20 w-20 object-contain dark:block"
            />
            <img
              src="/InnovateX-light.png"
              alt="InnovateX"
              className="block h-20 w-20 object-contain dark:hidden"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Innovate<span className="text-blue-500">X</span> Starter
          </h1>

          {/* Repo Description */}
          <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A boilerplate codebase for practice and learning.
          </p>

          {/* GitHub Action */}
          <div className="mt-6">
            <a
              href="https://github.com/innovatex-official/starter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <footer className="w-full border-t border-border/40 py-6 text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          {/* InnovateX Socials */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-medium text-foreground">InnovateX</span>
            <span className="text-border">·</span>
            <a
              href="https://github.com/innovatex-official"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/innovatex-official/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@innovatex-official"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              YouTube
            </a>
          </div>

          {/* Repo Link */}
          <div className="flex items-center">
            <a
              href="https://github.com/innovatex-official/starter"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              innovatex-official/starter
            </a>
          </div>

          {/* Suryanshu Socials */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-medium text-foreground">Suryanshu Nabheet</span>
            <span className="text-border">·</span>
            <a
              href="https://github.com/Suryanshu-Nabheet"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/suryanshu-nabheet/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@suryanshunabheet"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
