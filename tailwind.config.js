module.exports = {
  purge: ['./dist/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme =>({
        'body-pattern':"url('/src/assets/images/pattern.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
