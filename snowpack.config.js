/* eslint-disable */
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    // mount: {},
    plugins: [['@snowpack/plugin-typescript', { tsc: 'ttsc --build tsconfig.build.json' }]],
    // installOptions: {},a
    // devOptions: {},
    // buildOptions: {},
    alias: {
        '@/*': './src/*',
    },
    experiments: {
        routes: [
            { src: '/zeus/.*', dest: './src/__sandbox__/zeus/index.html' },
            { src: '/panel/.*', dest: './src/__sandbox__/panel/index.html' },
        ],
    },
};
