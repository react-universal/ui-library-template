module.exports = async ({config, mode}) => {
  config.module.rules.push(
    {
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {name: '[name].[ext]'},
      },
    },
    {
      test: /\.(js|jsx|mjs)$/,
      use: {
        loader: 'babel-loader',
      },
    },
  );

  config.resolve.extensions = ['.web.js', '.js', '.json', '.web.jsx', '.jsx'];

  config.resolve.alias = {
    'react-native': 'react-native-web',
  };

  return config;
};
