const path = require("path");
const dotenv = require("dotenv");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "./env/production.env")
      : path.resolve(__dirname, "./env/development.env")
});

module.exports = {
  entry: {
    main: "./src/index.tsx"
  },
  output: {
    clean: true,
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist")
  },
  mode: process.env.NODE_ENV,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // parser: "postcss-js",
                plugins: () => [
                  require("autoprefixer")({
                    browsers: ["last 2 version", ">1%", "ios7"]
                  })
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.json" })]
  },
  devServer: {
    open: true,
    port: 6018,
    contentBase: path.join(__dirname, "public"),
    contentBasePublicPath: "/public",
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css"
    }),
    new HtmlWebpackPlugin({
      title: "Custom template",
      template: "./index.html",
      chunks: "main"
    })
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 8888
    // })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
};
