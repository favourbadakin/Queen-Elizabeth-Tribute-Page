/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
       colors: {
        'primary': '#E7E8E9',
        'secondary': '#1B1C1E',
      },
      
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/footer.png')",
      },
      fontFamily: {
        'Raleway': ['Raleway','sans-serif'],
        'Anek': ['Anek Tamil','sans-serif'],
      },
    },
  },
  plugins: [],
}