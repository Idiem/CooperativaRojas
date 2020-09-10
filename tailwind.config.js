module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: [
      // Paths to your templates...
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
