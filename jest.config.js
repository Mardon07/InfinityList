/** @type {import('jest').Config} */
const config = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    moduleNameMapper: {
      '^.+\\.svg$': 'jest-svg-transformer',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  };
  
  export default config;