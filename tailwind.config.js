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
      rockBg: {
        rocketSt: '#29272E',
        rocketEnd: '#29272E',
      },
      codeBg:{
        codeSt: '#68DBF2',
        codeEnd: '#509CF5',
      },
      heartBg: {
        heartSt: '#FF92AE',
        heartEnd: '#FF3D9A',
      },
      securityBg: {
        secSt: '#67E9F1',
        secEnd: '#24E795',
      },

      successBg: {
        sucSt: '#FFEF5E',
        sucEnd: '#F7936F',
      },
      qualityBg: {
        qualitySt: '#F76680',
        qualityEnd: '#57007B'
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
