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
      }
    ]
  }
};