const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },

    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~assets': path.resolve(__dirname, './src/assets'),
          '~components': path.resolve(__dirname, './src/components'),
          '~constants': path.resolve(__dirname, './src/constants'),
          '~containers': path.resolve(__dirname, './src/containers'),
          '~helpers': path.resolve(__dirname, './src/helpers'),
          '~pages': path.resolve(__dirname, './src/pages'),
          '~services': path.resolve(__dirname, './src/services'),
          '~shared': path.resolve(__dirname, './src/shared'),
          '~states': path.resolve(__dirname, './src/states'),
          '~types': path.resolve(__dirname, './src/types'),
          '~validations': path.resolve(__dirname, './src/validations'),
          '~views': path.resolve(__dirname, './src/views'),
        },
        extensions: ['ts', 'tsx'],
      },
    },
  ],
};
