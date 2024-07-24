/** @type {import('tailwindcss').NextConfig} **/
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
      },
      maxWidth: {
        app: '700px',
      },
      colors: {
        anderson: '#8257e6',
      },
    },
  },
  plugins: [],
}
