/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'false'
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/src/assets/bg-logo.png')",
        'logo': "url('/src/assets/triangles.png')",
      }
    },
  },
  plugins: [],
}

