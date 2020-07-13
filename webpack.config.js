module.exports = {
  mode: "production",
  entry: "./src/EmojiSelector.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        // .ts or .tsx
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
}
