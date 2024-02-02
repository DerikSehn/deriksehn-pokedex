import type { Config } from "tailwindcss"
import noise_licorice_taupe from 'src/assets/noise/noise_licorice_taupe.png'

const colors = { 'cool_gray': { DEFAULT: '#A59DC7', 100: '#1e1a2d', 200: '#3b345b', 300: '#594e88', 400: '#7c71ad', 500: '#a59dc7', 600: '#b7b1d2', 700: '#c9c5dd', 800: '#dbd8e9', 900: '#edecf4' }, 'tea_rose_(red)': { DEFAULT: '#FEC6C8', 100: '#590104', 200: '#b30309', 300: '#fb151d', 400: '#fd6e73', 500: '#fec6c8', 600: '#fed3d4', 700: '#fededf', 800: '#ffe9ea', 900: '#fff4f4' }, 'raisin_black': { DEFAULT: '#2F2939', 100: '#09080b', 200: '#131016', 300: '#1c1822', 400: '#25212d', 500: '#2f2939', 600: '#564b68', 700: '#7e6f97', 800: '#a99fba', 900: '#d4cfdc' }, 'cool_gray': { DEFAULT: '#9B95BD', 100: '#1c1a29', 200: '#383453', 300: '#554e7c', 400: '#736ba2', 500: '#9b95bd', 600: '#aeaaca', 700: '#c3bfd7', 800: '#d7d4e4', 900: '#ebeaf2' }, 'champagne_pink': { DEFAULT: '#FEE9DF', 100: '#5d1f03', 200: '#ba3f06', 300: '#f86927', 400: '#fbaa84', 500: '#fee9df', 600: '#feefe7', 700: '#fef3ed', 800: '#fff7f3', 900: '#fffbf9' } }


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      moglan: 'moglan',
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Roosevelt'],
      body: ['"Open Sans"'],
      mont: ['Montserrat'],
      poppins: ['Poppins'],
      roboto: ['Roboto'],
      plex: ['"IBM Plex Mono"'],
      plex_bold: ['"IBM Plex Mono Bold"'],
      plex_bold_italic: ['"IBM Plex Mono Bold Italic"'],
      plex_italic: ['"IBM Plex Mono Italic"'],
      plex_light: ['"IBM Plex Mono Light"'],
      plex_light_italic: ['"IBM Plex Mono Light Italic"'],
      plex_medium: ['"IBM Plex Mono Medium"'],
      plex_medium_italic: ['"IBM Plex Mono Medium Italic"'],
      plex_regular: ['"IBM Plex Mono Regular"'],
      plex_regular_italic: ['"IBM Plex Mono Regular Italic"'],
      plex_semi_bold: ['"IBM Plex Mono SemiBold"'],
      plex_semi_bold_italic: ['"IBM Plex Mono SemiBold Italic"'],
      plex_thin: ['"IBM Plex Mono Thin"'],
      plex_thin_italic: ['"IBM Plex Mono Thin Italic"'],
    },
    textColor: colors,
    colors,
    container: {
      center: true,
      padding: "1rem",   
      screens: {
        "2xl": "1400px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
      },
      
    },
    
    
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config