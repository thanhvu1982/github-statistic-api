const path = require('path');

module.exports = {
  roots: [path.resolve(__dirname, './src')],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
