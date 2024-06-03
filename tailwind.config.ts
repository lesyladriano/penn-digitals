import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        satisfy: "'Satisfy', cursive",
        khu: "'Kaisei HarunoUmi', serif",
        pconflict: "'Passions Conflict', cursive",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pblue: "#366776",
        pstone: "#D66D50",
        pshell: "#FBF3EE",
        pwhite: "#FFF8F4",

        souv1: "#FFF8F2",
        souv2: "#F1E4D9",
        souv3: "#DEC8B3",
        souv4: "#BC7F6C",
        poffstone: '#BC7F6C'
      },
      width: {
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "100%": "100%",
      },
      height: {
        "5%": "5%",
        "10%": "10%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "43%": "43%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "90%": "90%",
        "100%": "100%",
      },
      screens: {
        xs: "320px", //  Mobile View
        sm: "376px", //  Mobile View
        smd: "576px", //  Mobile View
        md: "768px", // Tablet View
        lg: "992px", //Laptop View
        xl: "1280px", // Laptop
        "2xl": "1536px", // Desktop
        "3xl": "1900px", // Desktop
      },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
