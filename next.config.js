/** @type {import('next').NextConfig} */
// const webpack = require('webpack');
const withPWA = require('next-pwa')({
    dest: 'public',
});

const nextConfig = withPWA({
    productionBrowserSourceMaps: false,
    env: {
        SERVER_URL: process.env.SERVER_URL,
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: { images: { allowFutureImage: true } },
    // webpack(config) {
    //     // all vars end up in the client -
    //     config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    //     return config;
    // },
    experimental: {
        externalDir:
            true |
            {
                enabled: true,
                silent: true,
            },
    },
});

module.exports = nextConfig;
