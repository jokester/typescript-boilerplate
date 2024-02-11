module.exports = {
  roots: ['pages', 'src'],
  transformIgnorePatterns: ['<rootDir>/node_modules/.*\\.js', '<rootDir>/build/.*\\.js'],
  testMatch: ['**/*\\.(spec|test)\\.(ts|js|tsx|jsx)'],
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!build/', '!**/node_modules', '!/coverage'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/mocks/resolves-to-path.json',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/test/mocks/resolves-to-path.json',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: {
          jsx: 'react',
        },
      },
    ],
  },
};
