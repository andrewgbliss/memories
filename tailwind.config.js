module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './styles/**/*.css'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
