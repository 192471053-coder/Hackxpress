/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#050505',
        obsidian: '#0B0B0B',
        bgSecondary: '#111111',
        charcoal: '#171717',
        goldPrimary: '#D4AF37',
        goldBright: '#F5C542',
        goldChampagne: '#E8D7A8',
        goldDark: '#8A6A20',
        ivory: '#F5F1E6',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(245, 197, 66, 0.35)',
        'gold-inner': 'inset 0 0 15px rgba(212, 175, 55, 0.2)',
        'obsidian-card': '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 1px rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5C542 0%, #D4AF37 50%, #8A6A20 100%)',
        'gold-radial': 'radial-gradient(circle, rgba(245, 197, 66, 0.25) 0%, rgba(5, 5, 5, 0) 70%)',
        'obsidian-glass': 'linear-gradient(180deg, rgba(17, 17, 17, 0.75) 0%, rgba(11, 11, 11, 0.9) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(245, 197, 66, 0.8))' },
        },
        trackFlow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-gold': 'pulseGlow 3s ease-in-out infinite',
        'track-move': 'trackFlow 2s linear infinite',
        'fadeIn': 'fadeIn 0.4s ease-in-out',
      }
    },
  },
  plugins: [],
}
