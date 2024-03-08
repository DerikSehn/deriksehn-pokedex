import type { Config } from "tailwindcss"
import noise_licorice_taupe from 'src/assets/noise/noise_licorice_taupe.png'

const colors = { 'rich_black': { DEFAULT: '#0A0E17', 100: '#020304', 200: '#040509', 300: '#06080d', 400: '#070a11', 500: '#0a0e17', 600: '#273558', 700: '#445e9b', 800: '#7a90c5', 900: '#bcc8e2' }, 'gunmetal': { DEFAULT: '#0C2B36', 100: '#02090b', 200: '#051116', 300: '#071a21', 400: '#0a222b', 500: '#0c2b36', 600: '#1c657f', 700: '#2c9ec8', 800: '#6dc1df', 900: '#b6e0ef' }, 'ochre': { DEFAULT: '#E1770B', 100: '#2d1702', 200: '#5a2f04', 300: '#864606', 400: '#b35e08', 500: '#e1770b', 600: '#f5912d', 700: '#f8ac61', 800: '#fac896', 900: '#fde3ca' }, 'ebony': { DEFAULT: '#515249', 100: '#10100e', 200: '#20201d', 300: '#30312b', 400: '#40413a', 500: '#515249', 600: '#757769', 700: '#999a8d', 800: '#bbbcb3', 900: '#ddddd9' }, 'moonstone': { DEFAULT: '#16B7C8', 100: '#042528', 200: '#094a51', 300: '#0d6e79', 400: '#1293a2', 500: '#16b7c8', 600: '#31d6e8', 700: '#65e0ee', 800: '#98eaf4', 900: '#ccf5f9' }, 'coquelicot': { DEFAULT: '#F53A09', 100: '#310b02', 200: '#621704', 300: '#942205', 400: '#c52d07', 500: '#f53a09', 600: '#f8603a', 700: '#fa886b', 800: '#fbb09d', 900: '#fdd7ce' }, 'finn': { DEFAULT: '#6E437B', 100: '#160d18', 200: '#2c1b31', 300: '#412849', 400: '#573661', 500: '#6e437b', 600: '#925aa3', 700: '#ae83bb', 800: '#c9acd1', 900: '#e4d6e8' }, 'naples_yellow': { DEFAULT: '#FDD868', 100: '#463501', 200: '#8d6a02', 300: '#d39f03', 400: '#fcc522', 500: '#fdd868', 600: '#fddf86', 700: '#fee7a5', 800: '#feefc3', 900: '#fff7e1' } }


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