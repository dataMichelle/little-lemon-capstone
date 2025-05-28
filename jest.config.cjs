module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/tests/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
};
