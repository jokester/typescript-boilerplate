const base = require('./.eslintrc.base');
module.exports = {
  ...base,
  extends: ['next/core-web-vitals', ...base.extends],
};
