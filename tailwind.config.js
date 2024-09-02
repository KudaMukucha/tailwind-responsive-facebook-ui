/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'dark-main':"#18191A",
        'dark-second':"#242526",
        'dark-third':"#3A3B3C",
        "dark-text":"#B8BBBF"
      },
      fontFamily:{
        "segoe-ui": ["Segoe UI"]
      }
    },
  },
  plugins: [],
}

