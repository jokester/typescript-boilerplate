module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  roots: ['src', 'test'],
  transformIgnorePatterns: ['<rootDir>/node_modules/.*\\.js', '<rootDir>/build/.*\\.js'],
  testMatch: ['**/*\\.(spec|test)\\.(ts|js|tsx|jsx)'],
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!out/', '!build/', '!**/node_modules', '!/coverage'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/resolves-to-path.json',
    '\\.(css|less|scss|sass)$': '<rootDir>/test/mocks/resolves-to-path.json',
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
};
