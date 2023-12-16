/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {
        sm: "0.875rem",
        md: "1rem",
        lg: "1.2rem",
        xl: "1.4rem",
        nav: "1.3rem",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(+100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.7s ease-in-out",
        slideInRight: "slideInRight 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
