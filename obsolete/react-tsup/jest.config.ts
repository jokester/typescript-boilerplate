const nodeModulesToTranspile = ['@babylonjs'];

export default {
  roots: ['src'],
  transformIgnorePatterns: [`node_modules/(?!(${nodeModulesToTranspile.join('|')})/)`, '<rootDir>/build/.*\\.js'],
  testMatch: ['**/*\\.(spec|test)\\.(ts|js|tsx|jsx)'],
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!out/', '!build/', '!**/node_modules', '!/coverage'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  transform: {
    ['^.+\\.(ts|tsx|js|jsx)$']: ['@swc/jest'],
  },
};
