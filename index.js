/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modals/**/*.{js,ts,jsx,tsx}",
    "./src/images/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFD7E1",
          100: "#FFC2D1",
          200: "#FF99B3",
          300: "#FF7194",
          400: "#FF4876",
          500: "#FF1F57",
          600: "#E60039",
          700: "#AE002B",
          800: "#76001D",
          900: "#3E000F",
        },
        secondary: {
          50: "#B9E2FF",
          100: "#A4D9FF",
          200: "#7BC9FF",
          300: "#53B8FF",
          400: "#2AA7FF",
          500: "#0196FF",
          600: "#0075C8",
          700: "#005490",
          800: "#003358",
          900: "#001320",
        },
      },
    },
  },
  plugins: [],
};
