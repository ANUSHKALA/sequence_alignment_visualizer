/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  backgroundImage: {
    'hero-pattern': "url('/img/hero-pattern.svg')",
    'dna_bg': "url('https://cdn.pixabay.com/photo/2020/09/21/23/33/dna-5591477_1280.jpg')",
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

