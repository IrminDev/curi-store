/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary-dark": '#003C43',
      "primary": '#135D66',
      "primary-light": '#77B0AA',
      "primary-lighter": '#E3FEF7',
      "secondary-darker": '#222831',
      "secondary-dark": '#31363F',

    }
  },
  plugins: [],
}