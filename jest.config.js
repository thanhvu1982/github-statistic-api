const path = require('path');

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  roots: [path.resolve(__dirname, './src')],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
