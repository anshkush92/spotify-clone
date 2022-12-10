/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Extending the default theme
    extend: {
      screens: {
        "2xl": "1500px",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
      animation: {
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    // Overriding the default theme
    fontFamily: {
      all: ["Andada Pro", "serif"],
      sans: ["sans-serif", "system-ui"],
    },
  },
  // Lets you control properties of the native HTML elements ---> Added the rounded property to the scrollbar
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  // Add plugins for easier development in Tailwind
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
