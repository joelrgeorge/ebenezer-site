/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        primary: "#111111",
        secondary: "#1f2937",
        accent: "#f59e0b",
        muted: "#6b7280",
        light: "#f9fafb",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.1)",
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },

      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};