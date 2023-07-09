module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['./'],
        alias: {
          '@src': './src',
          '@assets': './src/assets/',
          '@containers': './src/components/containers/',
          '@uicomponents': './src/components/uicomponents/',
          '@constants': './src/constants/',
          '@contexts': './src/contexts/',
          '@data': './src/data',
          '@hooks': './src/hooks/',
          '@providers': './src/providers',
          '@routers': './src/routers/',
          '@saga': './src/saga/',
          '@screens': './src/screens/',
          '@store': './src/store/',
          '@types': './src/types/',
        },
      },
    ],
  ],
};
