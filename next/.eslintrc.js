const base = require('./.eslintrc.react');
module.exports = {
  ...base,
  extends: ['next', 'next/core-web-vitals', ...base.extends],
};
