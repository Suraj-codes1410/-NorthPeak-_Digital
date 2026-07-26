/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F4',
        surface: '#FFFFFF',
        'surface-alt': '#F2F1EC',
        primary: '#111827',
        secondary: '#6B7280',
        border: '#E5E7EB',
        accent: '#2563EB',
        gold: '#C8A64D',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        card: '24px',
      },
      boxShadow: {
        premium: '0 4px 20px -2px rgba(17, 24, 39, 0.03), 0 2px 6px -1px rgba(17, 24, 39, 0.02)',
      },
    },
  },
  plugins: [],
};
