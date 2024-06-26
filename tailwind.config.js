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
    variants: {
      extend: {
        // Enable pseudo-elements for margin and padding
        margin: ['after'],
        padding: ['after'],
        content: ['after'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.after-content-image': {
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            width: '40px', // Adjust as needed
            height: '40px', // Adjust as needed
            backgroundImage: '/src/', // Adjust path as needed
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            marginLeft: '10px', // Adjust as needed
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
