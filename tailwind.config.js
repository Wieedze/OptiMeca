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
          DEFAULT: '#FF4500',
          dark: '#CC3700',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#2A2A2A',
          foreground: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#1A1A1A',
          lighter: '#2A2A2A',
        },
        card: {
          DEFAULT: '#1A1A1A',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#1A1A1A',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#2A2A2A',
          foreground: '#9CA3AF',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        foreground: '#FFFFFF',
        ring: '#FF4500',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
