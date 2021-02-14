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
  },
  variants: {
    extend: {
      scale: ['disabled'],
      transform: ['disabled'],
      cursor: ['disabled', 'disabled-hover'],
      borderWidth: ['disabled-hover', 'active'],
      borderColor: ['disabled-hover', 'active']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),

    plugin(function({ addVariant, e }) {
      addVariant('disabled-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled-hover${separator}${className}`)}[disabled]:hover`
        })
      })
    })
  ],
}
