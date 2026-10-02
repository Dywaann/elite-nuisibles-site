/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#15203d', soft: '#3d4a60', muted: '#5a6478' },
        navy: { DEFAULT: '#15265f', deep: '#0e1c47', night: '#0a1430' },
        brand: { DEFAULT: '#1d70e0', dark: '#155bbd', tint: '#e7f0fc' },
        mist: { DEFAULT: '#f2f6fc', light: '#f8fafd' },
        line: '#e2e6ee',
        go: { DEFAULT: '#16a34a', dark: '#15803d' },
        star: '#f5a623',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,28,71,.04), 0 8px 24px rgba(15,28,71,.06)',
        lift: '0 24px 60px rgba(15,28,71,.16)',
        brand: '0 8px 22px rgba(29,112,224,.34)',
        go: '0 8px 22px rgba(22,163,74,.32)',
      },
      maxWidth: { site: '1180px' },
    },
  },
  plugins: [],
};
