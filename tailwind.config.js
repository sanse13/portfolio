/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end) forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
