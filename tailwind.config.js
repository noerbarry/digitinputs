module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#777777",
        black_900: "#000000",
        light_green_600: "#7bb03a",
        yellow_900: "#f48f1d",
        red_800: "#c92325",
        white_A700: "#ffffff",
        gray_50: "#faf9f9",
        black_900_26: "#00000026",
      },
      borderRadius: {
        radius15: "15px",
        radius30: "30px",
        radius35: "35px",
        radius50: "50%",
        radius501: "50px",
        radius405: "40.5px",
        radius1000: "1000px",
        radius1465: "146.5px",
      },
      fontFamily: { josefinsans: "Josefin Sans" },
      boxShadow: { bs: "30px 45px  30px 0px #00000026" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
