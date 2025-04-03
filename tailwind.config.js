/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'selector',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily : {
        Montserrat : ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

