/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette — midnight blue / cyan developer theme
      colors: {
        navy: {
          900: '#050d1a',
          800: '#081424',
          700: '#0d1e33',
          600: '#132640',
          500: '#1a3352',
        },
        cyan: {
          400: '#00c8ff',
          500: '#00b4e6',
        },
        blue: {
          500: '#1e6fff',
          400: '#3b8bff',
        },
      },
      // Custom font families — imported in index.html
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      // Custom keyframe animations
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0,200,255,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(0,200,255,0.7)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-up-delay-1': 'fadeUp 0.7s ease 0.1s both',
        'fade-up-delay-2': 'fadeUp 0.7s ease 0.25s both',
        'fade-up-delay-3': 'fadeUp 0.7s ease 0.4s both',
        'fade-up-delay-4': 'fadeUp 0.7s ease 0.55s both',
        'float': 'float 4s ease-in-out infinite',
        'blink': 'blink 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
