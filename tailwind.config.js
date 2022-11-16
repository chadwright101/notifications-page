/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        project: {
          red: "hsl(1, 90%, 64%)",
          blue: "hsl(219, 85%, 26%)",
          white: "hsl(0, 0%, 100%)",
          white2: "hsl(210, 60%, 98%)",
          lightGrey: "hsl(211, 68%, 94%)",
          lightGrey2: "hsl(205, 33%, 90%)",
          grey: "hsl(219, 14%, 63%)",
          darkGrey: "hsl(219, 12%, 42%)",
          black: "hsl(224, 21%, 14%)",
        },
      },
    },
  },
  plugins: [],
};
