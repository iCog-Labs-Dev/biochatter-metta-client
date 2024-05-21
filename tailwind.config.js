/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'false'
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'bg-logo.png': "url('/src/assets/bg-logo.png')",
        'rejuve.png': "url('/src/assets/rejuve.png')",
        'rejuve1.png': "url('/src/assets/rejuve1.png')",
        'rejuve2.png': "url('/src/assets/rejuve2.png')",
        'rejuve3.jpg': "url('/src/assets/rejuve3.jpg')",
        'dark_2.png': "url('/src/assets/dark_2.png')",
        'green.png': "url('/src/assets/green.png')",
        'colorful.png': "url('/src/assets/colorful.png')",
        'triangles.png': "url('/src/assets/triangles.png')",
      }
    },
  },
  plugins: [],
}

// corresponding datae in theme storedata
// {
//   name:'th1',
//   url:'/src/assets/bg-logo.png'},
//   {
//   name:'th2',
//   url:'/src/assets/rejuve.png',},
//   {
//   name:'th3',
//   url:'/src/assets/rejuve1.png'},
//   {
//   name:'th4',
//   url:'/src/assets/rejuve2.png'},
//   {
//   name:'th5',
//   url:'/src/assets/rejuve3.jpg'},
