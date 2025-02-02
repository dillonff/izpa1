/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
      backgroundImage: {
        'fluid-gradient':
          'linear-gradient(135deg, #ff3333 0%, #ff6b6b 20%, #ffffff 40%, #dc2626 60%, #ef4444 80%, #ff3333 100%)',
      },
    },
  },
  plugins: [],
};
