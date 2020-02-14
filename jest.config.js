module.exports = {
    moduleNameMapper: {
        '(.*).css': '<rootDir>/__mocks__/cssStub.js',
        '.svg(\\?inline)?$': '<rootDir>/__mocks__/svgStub.js',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(@brandwatch/axiom-components|@brandwatch/axiom-automation-testing|@brandwatch/axiom-charts|@brandwatch/axiom-formatting|@brandwatch/axiom-materials|@brandwatch/axiom-utils)/)',
    ],
}