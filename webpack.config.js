const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map", //It will be easier to track down errors
  devServer: {
    static: "./dist", //Tell webpack-dev-server to serve the files from the dist directory on localhost:8080
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
