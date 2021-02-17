'use strict';

const helpers = require('./helpers');

const tailwindWebpackRule = {
  test: /\.scss$/,
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    syntax: 'postcss-scss',
    plugins: () => [
      require('postcss-import'),
      require('tailwindcss')(helpers.root('tailwind.config.js')),
      require('autoprefixer'),
      require('postcss-focus-visible')
    ]
  }
};

exports.tailwindWebpackRule = tailwindWebpackRule;
