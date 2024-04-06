/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'false'
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/src/assets/dark_2.png')",
        'logo': "url('/src/assets/triangles.png')",
        'logo': "url('/src/assets/colorful.png')",
        'logo': "url('/src/assets/green.png')",
        'logo': "url('/src/assets/rejuve.png')",
        'logo': "url('/src/assets/bg-logo.png')",
      }
    },
  },
  plugins: [],
}

