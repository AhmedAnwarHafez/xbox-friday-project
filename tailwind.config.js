module.exports = {
  purge: ['./public/**/*.html'], // purge option to remove any unused classes to out put the smallest file size for production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { // demo purposes, otherwise just delete the whole colors object
        puce: '#cc8899'
      }
    }
  },
  variants: {},
  plugins: []
}
