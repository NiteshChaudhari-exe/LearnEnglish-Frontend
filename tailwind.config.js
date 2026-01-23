module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      spacing: {
        'safe-b': 'env(safe-area-inset-bottom)',
      }
    }
  },
  plugins: []
}
