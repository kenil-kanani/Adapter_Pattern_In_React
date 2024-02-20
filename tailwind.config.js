/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "dark": {
          "primary": "#4C51BF",
          "primary-focus": "#434190",
          "primary-content": "#ffffff",
          "secondary": "#2E3A59",
          "secondary-focus": "#1D2F4A",
          "secondary-content": "#ffffff",
          "accent": "#37CDBE",
          "accent-focus": "#2AA79B",
          "accent-content": "#ffffff",
          "neutral": "#3D4451",
          "neutral-focus": "#2A2E37",
          "neutral-content": "#ffffff",
          "base-100": "#0D1117", // bg
          "base-200": "#2E3A59",
          "base-300": "#3D4451",
          "base-content": "#ffffff",
          "info": "#2094F3",
          "success": "#009485",
          "warning": "#FF9900",
          "error": "#FF5724"
        }
      }
    ],
  },
  plugins: [require("daisyui")],
}

