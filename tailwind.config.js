module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        color1: "#EBDFC7",
        color2: "#B18431",
        color3: "#21272A",
        color4: "#D9D9D9",
        color5: "#FFFFFF",
        color6: "#1E1E1E",
        color7: "#353738",
        color8: "#DDE1E6",
        color9: "#6A6A6A"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lato: ['Lato', 'sans-serif']
      },
      fontWeight: {
        extraLight: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900
      },
      fontSize: {
        '8': '0.5rem',      // 8px
        '12': '0.75rem',    // 12px
        '16': '1rem',       // 16px (esto es el tamaño base en Tailwind)
        '20': '1.25rem',    // 20px
        '24': '1.5rem',     // 24px
        '28': '1.75rem',    // 28px
        '32': '2rem',       // 32px
        '36': '2.25rem',    // 36px
        '40': '2.5rem',     // 40px
        '44': '2.75rem',    // 44px
        '48': '3rem',       // 48px
      },
      lineHeight: {
        '12': '0.75rem',    // 12px
        '16': '1rem',       // 16px (esto es el tamaño base en Tailwind)
        '20': '1.25rem',    // 20px
        '24': '1.5rem',     // 24px
        '28': '1.75rem',    // 28px
        '32': '2rem',       // 32px
        '36': '2.25rem',    // 36px
        '40': '2.5rem',     // 40px
        '44': '2.75rem',    // 44px
        '48': '3rem',       // 48px
        '52': '3.25rem',    // 52px
      },
      screens: {
        '2md': '960px',
      }
    },
  },
  plugins: [],
}