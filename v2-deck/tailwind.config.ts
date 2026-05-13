import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xs":  ["11px", { lineHeight: "1.4"  }],
      xs:     ["12px", { lineHeight: "1.45" }],
      sm:     ["13px", { lineHeight: "1.5"  }],
      base:   ["15px", { lineHeight: "1.7"  }],
      md:     ["16px", { lineHeight: "1.55" }],
      lg:     ["18px", { lineHeight: "1.55" }],
      xl:     ["20px", { lineHeight: "1.45" }],
      "2xl":  ["24px", { lineHeight: "1.3"  }],
      "3xl":  ["28px", { lineHeight: "1.25" }],
      "4xl":  ["34px", { lineHeight: "1.2"  }],
      "5xl":  ["44px", { lineHeight: "1.1"  }],
    },
    extend: {
      colors: {
        background:      "var(--background)",
        foreground:      "var(--foreground)",
        muted:           "var(--muted)",
        subtle:          "var(--subtle)",
        border:          "var(--border)",
        "border-strong": "var(--border-strong)",
        hover:           "var(--hover)",
        accent:          "var(--accent)",
        "accent-muted":  "var(--accent-muted)",
      },
      fontFamily: {
        sans: [
          "Geist",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        prose:  "680px",
        detail: "760px",
        scene:  "880px",
        wide:   "960px",
      },
      transitionDuration: {
        180: "180ms",
        500: "500ms",
        600: "600ms",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0.6, 0.2, 1)",
      },
      letterSpacing: {
        editorial: "-0.005em",
        section:   "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
