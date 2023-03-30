module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
      screens: {
        sm: "100%",
        md: "100%",
        lg: "992px",
        xl: "1280px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      robotoSlab: ["Roboto Slab", "serif"],
    },
    fontSize: {
      xs: ".75rem", // 12px
      xtiny: ".8125rem", // 13px
      tiny: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", // 24px
      "4xl": "1.5625rem", // 25px
      "5xl": "1.625rem", // 26px
      "6xl": "1.75rem", // 28px
      "7xl": "2.5rem", // 40px
      "8xl": "6rem", // 40px
    },

    extend: {
      backgroundImage: {
        homeBg: "url('/src/assets/images/background/bg.jpg')",
        "homeBg-dark": "url('/src/assets/images/background/bg-dark.jpg')",
        "homeTwoBg-dark": "url('/src/assets/images/background/bg-dark.jpg')",
      },
      colors: {
        gray: "#F3F6F6",
        "gray-lite": "#44566C",
        oriange: "#E93B81",
        green: "#6AB5B9",
        "oriange-lite": "#FD7590",
        "color-50": "#C17CEB",
        "color-100": "#FCF4FF",
        "color-200": "#D566FF",
        "color-300": "#FFF4F4",
        "color-400": "#FF6080",
        "color-500": "#F3FAFF",
        "color-600": "#269FFF",
        "color-700": "#FEFAF0",
        "color-800": "#DDA10C",
        "color-810": "#F8FBFB",
        "color-820": "#8774FF",
        "color-830": "#FF75D8",
        "color-840": "#FF6786",
        // dart-color
        "color-910": "#A6A6A6",
        "color-920": "#1D1D1D",
        "color-930": "#00a9bf",
        "color-940": "#9272D4",
        "color-950": "#5185D4",
        "color-960": "#CA56F2",
        "color-970": "#1C1C1C",
        "color-980": "#0D0D0D",
        "color-990": "#212425",
      },
      boxShadow: {
        icon: "0 4px 6px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
