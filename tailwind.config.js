// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C40000",    // Merah utama (logo)
          dark: "#1A1A1A",        // Background utama
          light: "#CCCCCC",       // Text sekunder
          accent: "#E60000",      // Tombol hover / aksen kuat
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
