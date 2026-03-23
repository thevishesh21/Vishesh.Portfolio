/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: '#030303',
        abyss: '#0a0a0b',
        obsidian: '#0f0f12',
        charcoal: '#141419',
        graphite: '#1a1a22',
        slate: '#22222d',
        smoke: '#2a2a38',
        cyan: {
          50: '#e6ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00e5e5',
          600: '#00b8b8',
          700: '#008a8a',
          800: '#005c5c',
          900: '#002e2e',
        },
        purple: {
          50: '#f5f0ff',
          100: '#e6d9ff',
          200: '#d4c2ff',
          300: '#c2abff',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}
