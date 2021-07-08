module.exports = {
  purge: ['./dist/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme =>({
        'body-pattern':"url('/src/assets/images/pattern.png')"
      }),
      colors:{
        "azul-claro":"#37bcf9",
        "azul-oscuro":"#0370b9",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
