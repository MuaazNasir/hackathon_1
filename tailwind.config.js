/** @type {import('tailwindcss').Config} */
module.exports = {
  important : true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'lighestBlue' : '#FBFFDC',
        'lightBlue' : '#D0F5BE',
        'darkBlue' : '#98EECC',
        'darkestBlue' : '#79E0EE'
      }
    },
  },
  plugins: [],
}
