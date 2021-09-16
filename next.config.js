/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
 };

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// const withFonts = require("next-fonts");
//
// module.exports = withFonts({
//   webpack(config, options) {
//     config.node = {
//       fs: "empty",
//     };
//     config.module.rules.push({
//       test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "url-loader?limit=100000",
//         },
//         {
//           loader: "file-loader",
//         },
//       ],
//     });
//     return config;
//   },
// });
