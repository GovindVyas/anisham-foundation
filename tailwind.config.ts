import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate" // Import the plugin

const config = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Palette Option 1: Trustworthy & Calm
        border: "hsl(var(--border))", // Shadcn border
        input: "hsl(var(--input))", // Shadcn input
        ring: "hsl(var(--ring))", // Shadcn ring
        background: "hsl(var(--background))", // Shadcn background (adapts to dark mode)
        foreground: "hsl(var(--foreground))", // Shadcn foreground (adapts to dark mode)
        primary: {
          DEFAULT: "#1A3A5F", // Deep Blue
          foreground: "hsl(var(--primary-foreground))", // Shadcn primary foreground
        },
        secondary: {
          DEFAULT: "#F3F4F6", // Light Gray
          foreground: "hsl(var(--secondary-foreground))", // Shadcn secondary foreground
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Shadcn destructive
          foreground: "hsl(var(--destructive-foreground))", // Shadcn destructive foreground
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Shadcn muted
          foreground: "hsl(var(--muted-foreground))", // Shadcn muted foreground
        },
        accent: {
          DEFAULT: "#34D399", // Emerald Green (for CTAs)
          foreground: "hsl(var(--accent-foreground))", // Shadcn accent foreground
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Shadcn popover
          foreground: "hsl(var(--popover-foreground))", // Shadcn popover foreground
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Shadcn card
          foreground: "hsl(var(--card-foreground))", // Shadcn card foreground
        },
        // Adding neutrals explicitly if needed outside Shadcn context
        neutral: {
          text: "#111827", // Dark Gray for light mode text
          'dark-bg': "#111827", // Dark mode background
          'dark-text': "#F9FAFB", // Off-white for dark mode text
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Inter for body text
        heading: ["var(--font-satoshi)", "sans-serif"], // Satoshi for headings
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate], // Use the imported plugin
} satisfies Config

export default config
