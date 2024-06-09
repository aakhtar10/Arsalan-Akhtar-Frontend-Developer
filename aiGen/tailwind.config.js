/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          "100": "#141414",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(255, 255, 255, 0.3)",
          "500": "rgba(255, 255, 255, 0.08)",
          "600": "rgba(255, 255, 255, 0.5)",
          "700": "rgba(18, 18, 18, 0)",
          "800": "rgba(255, 255, 255, 0.8)",
          "900": "rgba(0, 0, 0, 0.2)",
          "1000": "rgba(255, 255, 255, 0.15)",
          "1100": "rgba(255, 255, 255, 0.7)",
          "1200": "rgba(255, 255, 255, 0.05)",
        },
        dodgerblue: "#028dfd",
        blueviolet: "#9a34ff",
        darkorange: "#ff8f34",
        firebrick: "#be2c2c",
        lightcoral: "#ff9999",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        inherit: "inherit",
        inter: "Inter",
      },
      borderRadius: {
        "lgi-2": "19.2px",
        "base-3": "15.3px",
        "2xl-6": "21.6px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "10xl": "29px",
      xl: "20px",
      base: "16px",
      "29xl": "48px",
      "19xl": "38px",
      "3xl": "22px",
      lg: "18px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
