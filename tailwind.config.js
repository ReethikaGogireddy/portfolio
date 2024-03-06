/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const blurUtilities = {
        ".blur-50": {
          filter: "blur(50px)",
        },
      };

      addUtilities(blurUtilities, ["responsive"]);
    },
  ],
};
