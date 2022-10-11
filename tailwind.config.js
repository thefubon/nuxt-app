/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./public/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "app.{js,ts,vue}"
  ],
  darkMode: 'class',
  darkSelector: '.dark',
  theme: {
    container: {
      center: true,
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        default: '#1B2C4E',
        dark: '#002033',
        primary: {
          300: '#0097D8',
          600: '#0071BA',
        },
        secondary: '#FF9568',
        tertiary: '#ED3D6F',
        system: '#E2E8F0',
        caution: '#FACC15',
        success: '#22C55E',
        alert: '#F43F5E',
        normal: '#38BDF8',
        error: '#DC2626',
        disabled: '#80B8DD',
      },
    },
  },
  variants: {
    scrollbar: ["dark"],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("@tailwindcss/forms"),
    require("tailwindcss-scrollbar"),
  ]
}