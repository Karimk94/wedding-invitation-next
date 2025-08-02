/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Added your new color palette here
      colors: {
        "theme-beige": "#F2EBE3",
        "theme-dark-green": "#33403A",
        "theme-primary": "#45524A", // Muted Dark Green
        "theme-secondary": "#C3A3A3", // Soft Pink/Mauve
        "theme-accent": "#99806A", // Warm Gold/Beige
      },
      // Removed the keyframes and animation extensions that depended on the missing plugin.
      keyframes: {
        // Original keyframes can be re-added if the animate plugin is installed.
      },
      animation: {
        // Original animations can be re-added if the animate plugin is installed.
      },
    },
  },
  // Removed the 'tailwindcss-animate' plugin to fix the build error.
  plugins: [],
};
