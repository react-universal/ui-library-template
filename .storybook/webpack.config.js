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

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.resolve.extensions = [
    '.web.js',
    '.js',
    '.json',
    '.web.jsx',
    '.jsx',
    '.ts',
    '.tsx',
  ];

  config.resolve.alias = {
    'react-native': 'react-native-web',
  };

  return config;
};
