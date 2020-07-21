module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            compilerOptions: {
              noEmit: false,
              target: 'es6',
              module: 'commonjs',
              jsx: 'react',
            },
          },
        },
        // Optional
        // { loader: require.resolve('react-docgen-typescript-loader'), },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
