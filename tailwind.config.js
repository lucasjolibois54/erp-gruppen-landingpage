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

      },
      screens: {
        'xxsm': '220px',
        // => @media (min-width: 520px) { ... }
      
        'xsm': '370px',
        // => @media (min-width: 520px) { ... }

        'basesm': '450px',
        // => @media (min-width: 520px) { ... }

        'mdsm': '640px',
        // => @media (min-width: 440px) { ... }
      
        'basemd': '740px',
        // => @media (min-width: 768px) { ... }
      
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