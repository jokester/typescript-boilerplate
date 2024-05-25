const base = require('./.eslintrc.base');
const reactRules = {
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react/button-has-type': 'error',
  'react/display-name': 0,
  'react/prop-types': 0,
  'react/react-in-jsx-scope': 0,
};

module.exports = {
  ...base,
  plugins: [...base.plugins, 'react', 'react-hooks'],
  rules: {
    ...base.rules,
    ...reactRules,
  },
};
