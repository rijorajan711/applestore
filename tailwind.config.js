/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lobster:['Lobster','sans-serif'],
        secondStyle:['Playfair Display', 'serif'],
        thridStyle:['Abril Fatface', 'serif'],
        fourthStyle:['Roboto Condensed', "sans-serif"]
                  }
        

      
    },
  },
  plugins: [],
}

