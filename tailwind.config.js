/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        footer: "footerAnimation 0.5s ease",
        logo: "logoAnimation 0.25s ease",
        fee: "fee 0.25s ease",
        sum: "sumAnimation 0.25s ease",
      },
      boxShadow: {
        section: "0 0 1.25rem 0.25rem #71717a",
        sectionDark: "0 0 1.25rem 0.25rem #27272a",
      },
      keyframes: {
        footerAnimation: {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        logoAnimation: {
          from: { opacity: "0", transform: "translateY(-100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fee: {
          from: { opacity: "0", scale: "0" },
          to: { opacity: "1", scale: "1" },
        },
        sumAnimation: {
          from: { scale: "1.1" },
          to: { scale: "1" },
        },
      },
      width: {
        section: "min(100%, 40rem)",
      },
      height: {
        section: "min(100%, 47.55rem)",
      },
      textColor: {
        darkmode: "#999999",
      },
    },
  },
  plugins: [],
};
