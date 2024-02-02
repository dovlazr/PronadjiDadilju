/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        navBarTextColor: "#545454",
        footerTextColor: "#8D8D8D",
      },

      backgroundImage: {
        background_image_home: "url('/src/assets/background.svg')",
      },

      fontFamily: {
        "theme-logo": ["GT Walsheim Pro", "sans-serif"],
      },

      letterSpacing: {
        "headerHome": '-.068em',
        "paragraphHome": '-.015em',
        "buttonHome": '-.017em',
      },
    },
  },
  plugins: [require('flowbite/plugin'),],
};
