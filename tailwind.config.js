/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        // Calm availability pulse: one soft ring, then a pause.
        'soft-ping': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '40%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        // Gentle downward nudge for the scroll cue.
        nudge: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(1.5px)', opacity: '1' },
        },
      },
      animation: {
        nudge: 'nudge 2.6s ease-in-out infinite',
        'soft-ping': 'soft-ping 2.8s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
} 