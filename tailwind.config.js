/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        'sumi-black': '#1a1a1a',
        'washi-white': '#fdfdf8',
        'indigo-deep': '#2b3f6f',
        'akaneiro-red': '#c73e3a',
        'moss-green': '#5a6b4f',
        'stone-gray': '#e5e5e0',
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmRmZGY4Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')",
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
}