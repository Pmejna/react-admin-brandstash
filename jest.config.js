/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
  // jest-environment-jsdom package is installed since jsdom is not longer bundled with jest from version 28.x
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};