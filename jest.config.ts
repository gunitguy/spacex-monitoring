import { Config } from "@jest/types";

const config: Config.InitialOptions = {
    verbose: true,
    testRegex: "(src/.*\\.(test|spec))\\.(ts|tsx)$",
    preset: "ts-jest",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    globals: {
        TEST_ENV: true
    },
    testEnvironment: "jsdom",
    testResultsProcessor: "./node_modules/jest-junit-reporter",
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    transformIgnorePatterns: ["<rootDir>/node_modules/@testing-library/jest-dom"],
    moduleNameMapper: {
        "\\.scss$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["<rootDir>/test/rtl-setup.js"],
    testEnvironmentOptions: {
        url: "http://localhost"
    }
};

module.exports = config;
