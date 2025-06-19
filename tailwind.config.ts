// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',     // Small phones
      'sm': '640px',     // Larger phones
      'md': '768px',     // Tablets
      'lg': '1024px',    // Laptops
      'xl': '1280px',    // Desktop
      '2xl': '1536px',   // Large screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      maxWidth: {
        'screen-xs': '375px',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },
      colors: {
        'trust-navy': '#17254E',
        'healing-teal': '#00B4D3',
        'clinic-white': '#FFFFFF',
        'soft-charcoal': '#1E2959',
        base: {
          900: 'rgb(var(--base-900))',
          800: 'rgb(var(--base-800))',
          700: 'rgb(var(--base-700))',
          600: 'rgb(var(--base-600))',
          500: 'rgb(var(--base-500))',
          400: 'rgb(var(--base-400))',
          300: 'rgb(var(--base-300))',
          200: 'rgb(var(--base-200))',
          100: 'rgb(var(--base-100))',
          50: 'rgb(var(--base-50))',
          0: 'rgb(var(--base-0))',
        },
        accent: {
          900: 'rgb(var(--accent-900))',
          800: 'rgb(var(--accent-800))',
          700: 'rgb(var(--accent-700))',
          600: 'rgb(var(--accent-600))',
          500: 'rgb(var(--accent-500))',
          400: 'rgb(var(--accent-400))',
          300: 'rgb(var(--accent-300))',
          200: 'rgb(var(--accent-200))',
          100: 'rgb(var(--accent-100))',
          50: 'rgb(var(--accent-50))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Inter Tight"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'subtle-shift': 'subtle-shift 8s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'subtle-shift': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '25%': { transform: 'translate(2px, 2px)' },
          '75%': { transform: 'translate(-2px, -2px)' },
        },
        fadeUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      borderRadius: {
        xl: '1.5rem',
      },
      spacing: {
        13: '3.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
