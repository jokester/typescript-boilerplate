module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  roots: ['src', 'build'],
  transformIgnorePatterns: ['<rootDir>/node_modules/.*\\.js', '<rootDir>/build/.*\\.js'],
  testMatch: ['**/__test__/*\\.(ts|js|tsx|jsx)', '**/*\\.(spec|test)\\.(ts|js|tsx|jsx)'],
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!build/', '!**/node_modules', '!/coverage'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageReporters: ['json', 'lcov', 'text', 'html'],
};
