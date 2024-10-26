import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '24': '24px',
        '14': '14px',
        '58': '58px',

      },
      fontWeight: {
        '700': '700',
      },
      lineHeight: {
        '32': '32px',
        '22': '22px',
        '80': '80px',
        '24': '24px',
      },
      letterSpacing: {
        '0.1': '0.1px',
        '0.2': '0.2px',
      },
      textAlign: {
        right: 'right',
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#23A6F0',
        customkhaki: '#FFDCD1',  
        custompeach: '#E74040',   
        customgray: '#737373',
        customgreenlight: '#B9EAA8',
        customskyblue: '#23A6F0',
       },
      padding: {
        'custom': '13px 35px 13px 0px',
        'custo': '15px 25px 15px 25px',
        'cust': '80px 0px 80px 0px',
        '15': '15px',
        '40': '40px',
        '25': '25px',
      },
      width: {
        '1322': '1322px',
        '1046': '1046px',
        '187': '187px',
        '43': '43px',
        '41': '41px',
        '364': '364px',
        '328': '328px',
        '365': '365px',
        '542': '542px',
        '815': '815px',
        '699': '699px',
        '189': '189px',
        '214': '214px',
        '110': '110px',
        hug: '275px',
      },
      height: {
        '91': '91px',
        '58': '58px',
        hug: '24px',
        '52': '52px',
        '496': '496px',
        '520': '520px',
        '1028': '1028px',
        '24': '24px',
        '160': '160px',
        '22': '22px',

      },
      margin: {
        '59': '59px',
        '17': '17px',
        '197': '197px',
        '104': '104px',
        '30': '30px',
        '16': '16px',
        '364': '364px',
        '136': '136px',
        '626': '626px',
        '450': '450px',
        '3': '3px',
      },
      gap: {
        '21': '21px',
        '45': '45px',
        '15': '15px',
        '80': '80px',
        '40': '40px',
        '10': '10px',
      },
      borderRadius: {
        '5-tl': '5px 0px 0px 0px',
        '5': '5px',
      },
      spacing: {
        '15': '15px',
      },
    },
  },
  plugins: [],
};
export default config;
