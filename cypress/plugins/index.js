const webpack = require('@cypress/webpack-preprocessor')
const webpackOptions = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
};

const options = {
  // send in the options from your webpack.config.js, so it works the same
  // as your app's code
  webpackOptions,
  watchOptions: {},
};

module.exports = on => {
  on('file:preprocessor', webpack(options));
};
