const path = require('path')

module.exports = {
  entry: path.join(__dirname, "/public/src/index.js"),
  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "babel.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};