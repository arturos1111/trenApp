module.exports = {
  purge: {
    content: ['./apps/**/*.html', './libs/**/*.html'],
    options: {
      safelist: [/^focus-visible/, /^cdk-/, /^mat-/],
    },
  },
  variants: {
    extend: {
      outline: ['responsive', 'focus-visible'],
    },
  },
};
