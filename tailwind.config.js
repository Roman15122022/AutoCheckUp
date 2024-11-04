/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: {
          light: '#000000',
          dark: '#FFFFFF',
        },
      },
    }
  },
  plugins: [],
}

