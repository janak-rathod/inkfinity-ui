/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens - see README "Design system" section.
        ink: '#0A0A0A',        // page background - near-black
        charcoal: '#121212',   // card / section background
        line: '#242424',       // hairline borders / dividers on dark bg
        paper: '#F5F5F5',      // primary text
        muted: '#A3A3A3',      // secondary text
        accent: {
          DEFAULT: '#F5C400',  // electric yellow - the one saturated accent
          hover: '#FFDA47',
          muted: '#F5C40022'   // ~13% wash, tag chips / active pill fills
        },
        sage: '#6B7A5E'        // success / confirmation states only
      },
      fontFamily: {
        display: ['"Anton"', '"Archivo Black"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      maxWidth: {
        content: '1200px'
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.45)',
        glow: '0 0 0 1px #F5C400, 0 0 24px rgba(245,196,0,0.25)'
      },
      borderRadius: {
        card: '14px'
      }
    }
  },
  plugins: []
}
