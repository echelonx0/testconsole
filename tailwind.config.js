module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    // theme: {
    
    // },

    theme: {
      extend: {},
      themeVariants: ['dark']
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'), require('tailwindcss-multi-theme')],
};