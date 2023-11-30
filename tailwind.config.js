/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
