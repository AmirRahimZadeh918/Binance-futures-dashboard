/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        binance: ['"Binance PLEX"', 'sans-serif'],
      },
      colors: {
        brand: "#ebb918",
        "success": "#47be88",
        "danger": "#ee4359",
        "background-light": "#f5f5f5",
        "background-dark": "#000000",
        "surface-light-primary": "#ffffff",
        "surface-dark-primary": "#181a20",
        "surface-light-secondary": "#fafafa",
        "surface-dark-secondary": "#2c3139",
        "text-light-primary": "#000000",
        "text-dark-primary": "#ffffff",
        "text-light-secondary": "#8f96a3",
        "text-dark-secondary": "#7c8492",
      },
      padding: {
        xs: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        pill: "9999px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      zIndex: {
        auto: "auto",
        0: 0,
        10: 10,
        20: 20,
        50: 50,
        100: 100,
        modal: 999,
        overlay: 1000,
      },
      opacity: {
        0: "0",
        20: "0.2",
        40: "0.4",
        60: "0.6",
        80: "0.8",
        100: "1",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.1)",
        heavy: "0 4px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".background-color": {
          "@apply bg-background-light dark:bg-background-dark": {},
        },
        ".surface-color-primary": {
          "@apply bg-surface-light-primary dark:bg-surface-dark-primary": {},
        },
        ".surface-color-secondary": {
          "@apply bg-surface-light-secondary dark:bg-surface-dark-secondary": {},
        },
        ".text-color-primary": {
          "@apply text-text-light-primary dark:text-text-dark-primary": {},
        },
        ".text-color-secondary": {
          "@apply text-text-light-secondary dark:text-text-dark-secondary": {},
        },
        ".border-color-primary": {
          "@apply border-surface-light-primary dark:border-surface-dark-primary": {},
        },
        ".border-color-secondary": {
          "@apply border-surface-light-secondary dark:border-surface-dark-secondary": {},
        },
        ".color-transition": {
          "@apply transition-colors duration-300": {},
        },
      });
    },
  ],
};
