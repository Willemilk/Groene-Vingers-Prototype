import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        garden: {
          // Primary greens
          'forest': {
            DEFAULT: '#2d5a27',
            50: '#f0f7ef',
            100: '#d9edd6',
            200: '#b6ddb0',
            300: '#8bc880',
            400: '#5fad51',
            500: '#4a7c43',
            600: '#2d5a27',
            700: '#234520',
            800: '#1e3c19',
            900: '#152b12',
          },
          // Earthy browns
          'soil': {
            DEFAULT: '#5d4037',
            50: '#f5f1f0',
            100: '#e7dcd9',
            200: '#d0b8b0',
            300: '#b8948a',
            400: '#9d6f61',
            500: '#7d5347',
            600: '#5d4037',
            700: '#4a332c',
            800: '#3a2822',
            900: '#2d1f1b',
          },
          // Bright nature colors
          'leaf': '#7cb342',
          'moss': '#558b2f',
          'sage': '#9ccc65',
          'mint': '#aed581',
          'bark': '#795548',
          'flower': {
            'pink': '#f48fb1',
            'yellow': '#ffeb3b',
            'purple': '#ba68c8',
            'orange': '#ffb74d',
          },
          // Sky and water
          'sky': '#81d4fa',
          'water': '#4fc3f7',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'grow': 'grow 1.5s ease-out forwards',
        'leaf-fall': 'leafFall 10s linear infinite',
        'sway': 'sway 3s ease-in-out infinite',
        'bloom': 'bloom 2s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        grow: {
          '0%': {
            transform: 'scaleY(0)',
            transformOrigin: 'bottom',
            opacity: '0',
          },
          '100%': {
            transform: 'scaleY(1)',
            transformOrigin: 'bottom',
            opacity: '1',
          },
        },
        leafFall: {
          '0%': {
            transform: 'translateY(-100vh) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0',
          },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bloom: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.1) rotate(180deg)',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            opacity: '1',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-garden': 'linear-gradient(135deg, #2d5a27 0%, #4a7c43 50%, #7cb342 100%)',
        'gradient-earth': 'linear-gradient(135deg, #5d4037 0%, #795548 50%, #8d6e63 100%)',
        'gradient-spring': 'linear-gradient(135deg, #aed581 0%, #9ccc65 50%, #7cb342 100%)',
      },
      boxShadow: {
        'garden': '0 10px 40px -10px rgba(45, 90, 39, 0.4)',
        'leaf': '0 4px 20px -4px rgba(124, 179, 66, 0.3)',
        'glow-green': '0 0 20px rgba(124, 179, 66, 0.6)',
      },
    },
  },
  plugins: [],
} satisfies Config;
