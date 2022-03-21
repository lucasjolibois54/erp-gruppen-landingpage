module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '150': '150',
      },
      colors: {
        //background colors
        'green-hl': '#204B45',
        // Case Card BG Colors
        'card-bg-1': '#FBFAF8',
        'card-bg-2': '#E6F7EF',
        'card-bg-3': '#FBFBFB',
        'card-bg-4': '#F1F1FD',
        'card-bg-5': '#FDF3F1',
        // Line Color
        line: '#F6F6F6',
        // text
        'text-gray': '#8A8A8A',
        //logo bg
        'logos-bg':'#EEEEEE'
      },
      screens: {
        xxsm: '220px',
        // => @media (min-width: 520px) { ... }

        xsm: '340px',
        // => @media (min-width: 520px) { ... }

        ourservice: '420px',

        'abouthero-screen': '400px',
        abouthero2screen: '370px',

        ssm: '430px',
        // => @media (min-width: 520px) { ... }

        basesm: '450px',
        // => @media (min-width: 520px) { ... }

        xsbasesm: '550px',
        // => @media (min-width: 520px) { ... }

        smdsm: '600px',
        // => @media (min-width: 440px) { ... }

        mdsm: '630px',
        // => @media (min-width: 440px) { ... }

        sbasesm: '670px',
        // => @media (min-width: 440px) { ... }

        basemd: '740px',
        // => @media (min-width: 768px) { ... }

        lgbasemd: '770px',
        // => @media (min-width: 768px) { ... }

        smbaselg: '900px',
        // => @media (min-width: 1024px) { ... }

        aboutlg: '1000px',
        // => @media (min-width: 1024px) { ... }

        baselg: '1024px',
        // => @media (min-width: 1024px) { ... }

        base2lg: '1148px',
        // => @media (min-width: 1148px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '1xl': '1342px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',

        smbig: '1920px',
        // => @media (min-width: 1536px) { ... }
        big: '2550px',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
