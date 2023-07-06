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
          '@hooks': './src/hooks/',
          '@routers': './src/routers/',
          '@screens': './src/screens/',
          '@types': './src/types/',
        },
      },
    ],
  ],
};
