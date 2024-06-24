module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        custom: {
          '6675F7': '#6675F7',
          '57007B': '#57007B',
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #F76680, #57007B)',
      },
    },
  },
  plugins: [],
}
