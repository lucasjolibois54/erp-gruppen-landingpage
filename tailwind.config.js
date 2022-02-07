module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //background colors
        'green-hl': '#204B45',
        'card-1-color': '#FBFAF8',

      },
      screens: {
        'xxsm': '220px',
        // => @media (min-width: 520px) { ... }
      
        'xsm': '340px',
        // => @media (min-width: 520px) { ... }

        'ourservice': '420px',

        'ssm': '430px',
        // => @media (min-width: 520px) { ... }

        'basesm': '450px',
        // => @media (min-width: 520px) { ... }

        'xsbasesm': '550px',
        // => @media (min-width: 520px) { ... }

        'smdsm': '600px',
        // => @media (min-width: 440px) { ... }

        'mdsm': '630px',
        // => @media (min-width: 440px) { ... }

        'sbasesm': '670px',
        // => @media (min-width: 440px) { ... }
      
        'basemd': '740px',
        // => @media (min-width: 768px) { ... }
      
        'lgbasemd': '770px',
        // => @media (min-width: 768px) { ... }

        
        'smbaselg': '900px',
        // => @media (min-width: 1024px) { ... }

        'aboutlg': '1000px',
        // => @media (min-width: 1024px) { ... }

        'baselg': '1024px',
        // => @media (min-width: 1024px) { ... }
      
        'base2lg': '1148px',
        // => @media (min-width: 1148px) { ... }
      
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },},
  },
 
    variants: {
      extend: {},
    },
    plugins: [],
  }