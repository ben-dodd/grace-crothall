module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Title page
        'titlePage-sm': '5vw auto auto auto',
        'titlePage-md': '10vw auto auto auto',
        'titlePage-lg': '15vw auto auto auto',
        'alcala-sm': '5vw auto auto auto',
        'alcala-md': '10vw auto auto auto',
        'alcala-lg': '15vw auto auto auto',
      },
    },
  },
  variants: {},
}
