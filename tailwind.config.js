import {nextui} from "@nextui-org/react";
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      'xs': '340px',
      'xs2': '414px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        legoDarkest: '#082227',
        legoWhite: '#FCFDFF',
        legoTealInputLight: '#1C7183',
        legoTealInput: '#044A54',
        legoTeal: '#68C0CC',
        legoTealSection: '#045C68',
        legoTealLight: '#C8F3FC',
        legoYellow: '#FFD426',
        legoBrown: '#794202',
        // danger: "#FFD426",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

