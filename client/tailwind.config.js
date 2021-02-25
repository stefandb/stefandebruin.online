const plugin = require('tailwindcss/plugin');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'akaya-kanadaka': ['"Akaya Kanadaka"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  variants: {
    extend: {
      scale: ['disabled'],
      transform: ['disabled'],
      cursor: ['disabled', 'disabled-hover'],
      borderWidth: ['disabled-hover', 'active', 'focus'],
      borderColor: ['disabled-hover', 'active', 'focus'],
      textColor: ['disabled'],
      order: ['hover', 'focus', 'even', 'group-even', 'group-odd'],
      textColor: ['group-even', 'group-odd']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
    require('tailwind-group-even-odd'),
    plugin(function({ addVariant, e }) {
      addVariant('disabled-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled-hover${separator}${className}`)}[disabled]:hover`
        })
      })
    }),
  ],
}
