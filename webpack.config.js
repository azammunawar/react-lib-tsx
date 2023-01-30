const path = require("path");
const {} = require("css-loader");
module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "module",
  },
  resolve: { extensions: [".tsx", ".ts"] },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.tsx$/, use: "ts-loader" },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
};
