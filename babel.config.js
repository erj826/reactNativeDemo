module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['optional-require', 'react-native-paper/babel'],
      },
    },
  };
};
