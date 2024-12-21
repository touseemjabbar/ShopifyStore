/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths as per your project structure
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite VN Guides"', 'sans-serif'], // Add Playwrite font
        robotoMono: ['"Roboto Mono"', 'monospace'], // Add Roboto Mono font
      },
    },
  },
  plugins: [],
};
