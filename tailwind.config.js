/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aktiv': ['"Aktiv Grotesk"', 'sans-serif'],
        'Grotesk': ['"Space Grotesk"', 'sans-serif'],
        'blackhan': ['"Black Han Sans"', 'sans-serif'],
        'luckiest': ['"Luckiest Guy"', 'cursive'],
         'alan': ['"Alan Sans"', 'sans-serif']
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      scale: {
        'y-125': '1.25',
        'y-150': '1.5',
      },
    },
  },
  plugins: [],
}
