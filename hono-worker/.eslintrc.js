// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('./.eslintrc.base.js');
module.exports = {
  ...base,
  extends: [require.resolve('gts/.eslintrc'), ...base.extends],
};
