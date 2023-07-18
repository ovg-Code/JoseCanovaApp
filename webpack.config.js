const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './app/index.tsx',
    output:{
        path:__dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
              },
            ],
          },
          {
            test: /\.(s*)css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpg)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'images/[name]-[hash][ext]'
          }
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "assets/[name].css",
        }),
      ],
      devServer: {
        historyApiFallback: true,
        static: {
          directory: path.join(__dirname, 'public'),
        },
        hot: true,
      }
};
