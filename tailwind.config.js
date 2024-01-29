/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    width: {
      "55rem": "55rem",
      "509px": "509px",
    },
    height: {
      "23rem": "23.9rem", // Adding a custom height utility
    },
  },

  fontSize: {
    xs: ".75rem",
    sm: ".875rem",
    tiny: ".875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.25rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "5rem",
  },

  fontFamily: {
    "theme-f1": ['"GT Walsheim Pro"', "sans-serif"],
  },

  textColor: {
    "button":"#FFF"
  },

  colors: {
    "nav-bar-text": "#545454",
    "header-text1": "#A9B9F2",
    "header-text2": "#FDB5E9",
    "input-color": "#D0D0D0",
    "button-color": "#60A5FA"
  },
};
export const plugins = [];
