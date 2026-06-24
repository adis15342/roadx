/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A6B',    // dark navy blue (matches blade brand color)
        secondary: '#F5A623',  // amber/orange accent
        logored: '#C0392B',    // logo red
        brown: '#8B4513',      // brown (used in project cards border)
        grays: '#f3f4f6',      // light gray — footer background (bg-grays)
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
