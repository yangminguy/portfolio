import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    // Override default font sizes with a restrained editorial scale.
    fontSize: {
      "2xs":  ["11px", { lineHeight: "1.4"  }],
      xs:     ["12px", { lineHeight: "1.45" }],
      sm:     ["13px", { lineHeight: "1.5"  }],
      base:   ["15px", { lineHeight: "1.7"  }], // body default
      md:     ["16px", { lineHeight: "1.55" }],
      lg:     ["18px", { lineHeight: "1.55" }],
      xl:     ["20px", { lineHeight: "1.5"  }],
      "2xl":  ["24px", { lineHeight: "1.35" }],
      "3xl":  ["28px", { lineHeight: "1.3"  }],
      "4xl":  ["32px", { lineHeight: "1.25" }],
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
      },
      transitionDuration: {
        180: "180ms",
      },
      letterSpacing: {
        editorial: "-0.005em",
        section:   "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
