/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section-desktop': "url('https://i0.wp.com/socialdhara.com/wp-content/uploads/2022/01/Untitled-design-2.jpg')",
        'hero-section-mobile': "url('https://i.pinimg.com/736x/cc/29/1f/cc291f1a6fd587bf68117b9b32118195.jpg')",
        'hero-section-md': "url('https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg')"
      }
    },
  },
  plugins: [],
}

