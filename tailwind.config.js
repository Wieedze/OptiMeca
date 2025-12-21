/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9', // Electric blue
          dark: '#0284C7',
          light: '#38BDF8',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FBBF24', // Gold/Yellow for CTAs
          dark: '#F59E0B',
          light: '#FCD34D',
          foreground: '#0A1929',
        },
        navy: {
          DEFAULT: '#0A1929', // Deep navy blue
          light: '#1E3A8A',
          lighter: '#1E40AF',
          dark: '#050C14',
        },
        electric: {
          DEFAULT: '#00D4FF', // Bright electric blue
          glow: '#7DD3FC',
        },
        secondary: {
          DEFAULT: '#1E3A8A',
          foreground: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#0A1929', // Navy instead of pure black
          light: '#1E293B',
          lighter: '#334155',
        },
        card: {
          DEFAULT: '#1E293B',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#1E293B',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#334155',
          foreground: '#94A3B8',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        foreground: '#FFFFFF',
        ring: '#0EA5E9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Rajdhani', 'Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
