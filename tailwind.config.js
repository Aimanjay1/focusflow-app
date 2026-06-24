/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004ac6',
        'on-primary': '#ffffff',
        'primary-container': '#2563eb',
        secondary: '#4b41e1',
        'secondary-container': '#645efb',
        tertiary: '#943700',
        'tertiary-container': '#bc4800',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        surface: '#f8f9ff',
        'on-surface': '#0b1c30',
        'surface-container': '#e5eeff',
        'surface-variant': '#d3e4fe',
        'on-surface-variant': '#434655',
        outline: '#737686',
        'outline-variant': '#c3c6d7',
        background: '#f8f9ff',
        'on-background': '#0b1c30',
      },
      spacing: {
        'task-item-gap': '12px',
        'section-margin': '40px',
        'container-padding': '24px',
        gutter: '16px',
        base: '8px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md': ['12px', { lineHeight: '16px', fontWeight: '600', letterSpacing: '0.05em' }],
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
};

module.exports = config;
