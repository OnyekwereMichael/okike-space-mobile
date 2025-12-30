/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'Clash-Bold': ['ClashDisplay-Bold'],
        'Clash-Regular': ['ClashDisplay-Regular'],
        'Clash-Medium': ['ClashDisplay-Medium'],
        'Clash-Semibold': ['ClashDisplay-Semibold'],
        'Inter-Regular': ['Inter-Regular'],
        'Inter-Medium': ['Inter-Medium'],
        'Poppins-Regular': ['Poppins-Medium']
      },
    },
  },
  plugins: [],
}