/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black-fogra-29': 'hsla(222, 18%, 11%, 0.95)',
        'raisin-black-1': 'hsl(0, 0%, 16%)',
        'raisin-black-2': 'hsl(236, 17%, 17%)',
        'raisin-black-3': 'hsl(280, 11%, 11%)',
        'raisin-black-4': 'hsl(280, 8%, 15%)',
        'english-violet': 'hsl(274, 21%, 23%)',
        'eerie-black-1': 'hsl(277, 25%, 10%)',
        'eerie-black-2': 'hsl(280, 7%, 8%)',
        'roman-silver': 'hsl(220, 6%, 59%)',
        'quick-silver': 'hsl(0, 1%, 65%)',
        'light-gray-1': 'hsl(0, 0%, 80%)',
        'light-gray-2': 'hsl(0, 2%, 82%)',
        'marigold-75': 'hsla(0, 100%, 35%, 0.801)',
        'xiketic-90': 'hsla(280, 37%, 8%, 0.9)',
        'cultured-2': 'hsl(0, 0%, 97%)',
        'marigold': 'hsla(0, 100%, 45%, 0.89)',
        'platinum': 'hsl(0, 0%, 89%)',
        'dim-gray': 'hsl(0, 0%, 42%)',
        'white-15': 'hsla(0, 0%, 100%, 0.15)',
        'white-10': 'hsla(0, 0%, 100%, 0.1)',
        'xiketic': 'hsl(277, 25%, 10%)',
        'silver': 'hsl(0, 0%, 78%)',
        'jet': 'hsl(236, 13%, 23%)',
        'eerie-black': 'hsl(0, 0%, 11%)', // as default black
      },
      fontFamily: {
        oxanium: ['Oxanium', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fs-1': '7rem',
        'fs-2': '4.5rem',
        'fs-3': '3.6rem',
        'fs-4': '2.4rem',
        'fs-5': '2.2rem',
        'fs-6': '2rem',
        'fs-7': '1.6rem',
        'fs-8': '1.5rem',
        'fs-9': '1.4rem',
        'fs-10': '1.3rem',
        'fs-11': '1.2rem',
      },
      fontWeight: {
        'fw-500': '500',
        'fw-600': '600',
        'fw-700': '700',
        'fw-800': '800',
      },
      padding: {
        'section-padding': '120px',
      },
      backgroundImage: {
        'gradient': 'radial-gradient(circle, hsl(250, 7%, 17%), hsl(250, 11%, 11%))',
      },
      boxShadow: {
        'shadow-1': '0px 2px 8px 0px hsla(0, 0%, 0%, 0.2), inset 0px 2px 8px 0px hsla(0, 0%, 0%, 0.4)',
        'shadow-2': '0px 5px 10px 1px hsla(0, 0%, 0%, 0.4)',
        'shadow-3': '0px 5px 10px 1px hsla(219, 98%, 17%, 0.2)',
        'shadow-4': '0px 5px 10px 1px hsla(0, 0%, 0%, 0.15)',
      },
      transitionTimingFunction: {
        'cubic-out': 'cubic-bezier(0.33, 0.85, 0.4, 0.96)',
      },
      transitionDuration: {
        'default': '0.25s',
      },
    },
  },
  plugins: [],
}