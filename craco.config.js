const { name } = require('./package');
const CracoLessPlugin = require("craco-less")

module.exports = {
  webpack: (config) => {
    config.output.library = {
      name: `${name}-[name]`,
      type: "umd",
    }
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    config.module.rules = config.module.rules || []
    config.module.rules.push({
      test: /\.less$/i,
      use: [
        // compiles Less to CSS
        'style-loader',
        'css-loader',
        'less-loader',
      ],
    })
    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    // config.watchContentBase = false;
    config.liveReload = false;
    // config.injectClient = false;

    return config;
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessModuleRule: function () {
          return {
            test: /\.module\.less$/,
            exclude: /node_modules/,
            use: [
              { loader: "style-loader" },
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]_[hash:base64:6]",
                  },
                },
              },
              {
                loader: "less-loader",
              },
            ],
          }
        },
      },
    },
  ],
};
