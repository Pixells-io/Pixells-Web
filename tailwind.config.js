/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gradientHome:
          "linear-gradient(208.5deg, #FFAC46 -111.85%, #FF9546 -95.4%, #FF8046 -80.48%, #FF753C -65.87%, #FF6932 -50.93%, #FF7884 -37.04%, #FF8DFF -17.42%, #E284FF -0.22%, #C67BFF 13.61%, #A872FF 27.93%, #8C69FF 40.17%, #857AFF 52.93%, #7C8FFF 72.59%, #73A3FF 88.29%, #69B9FF 100.48%, #7FD6FF 113.33%, #51D5FF 124.52%, #51D5FF 136.51%)",
        primario: "#7794F9",
        primarioBotones: "#5B89FF",
        grisHeading: "#44444F",
        grisText: "#696974",
        grisSubText: "#8F8F8F",
        blancoBox2: "#E0E0E0",
        blancoBox: "#E8E8E8",
        blancoForms: "#F6F6F6",
        blancoBg: "#FBFBFB",
        grisBg: "#F2F2F2",
        gris: "#F6F6F6",
        gris2: "#696974",
        hoverModal: "#F4F4F4",
        grisDisabled: "#D7D7D7",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        chida: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
