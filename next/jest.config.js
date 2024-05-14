/**
 * @type {import('ts-jest').InitialOptionsTsJest}
 */
const customJestConfig = {
  roots: ['pages', 'app', 'src', 'shared', 'server'],
  transformIgnorePatterns: ['<rootDir>/node_modules/.*\\.js', '<rootDir>/build/.*\\.js'],
  testMatch: ['**/*\\.(spec|test)\\.(ts|js|tsx|jsx)'],
  collectCoverageFrom: ['**/*.(ts|tsx)', '!build/', '!**/node_modules', '!/coverage'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/src/test/mocks/resolves-to-path.json',
  //   '\\.(css|less|scss|sass)$': '<rootDir>/src/test/mocks/resolves-to-path.json',
  // },
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': [
  //     'ts-jest',
  //     {
  //       isolatedModules: true,
  //       tsconfig: {
  //         jsx: 'react',
  //       },
  //     },
  //   ],
  // },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({dir: './'});

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
