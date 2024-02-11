module.exports = async ({ env }) => {
  if (/* change to true to bundle preact instead of react */ 0) {
    return {
      webpack: {
        alias: {
          react: 'preact/compat',
          'react-dom': 'preact/compat',
        },
      },
    };
  }
  return {};
};
