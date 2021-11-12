//-----------------------------------------------------------------------------
// tailwind.config.js
//-----------------------------------------------------------------------------
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      tableLayout: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
