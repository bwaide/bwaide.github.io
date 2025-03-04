module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.markdown',
    './_alternatives/**/*.md',
    './_categories/**/*.md',
    './*.html',
    './*.markdown',
    './*.md',
    './index.markdown',
    './about.markdown',
    './categories/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066cc',
          dark: '#004d99',
        },
        accent: '#ff6600',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}