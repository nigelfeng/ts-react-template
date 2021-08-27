module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-typescript"],
  plugins: [
    [
      "styled-jsx/babel",
      {
        sourceMaps: true,
        plugins: ["styled-jsx-plugin-sass"]
      }
    ],
    [
      "import",
      {
        libraryName: "antd",
        style: "css"
      },
      "antd"
    ],
    [
      "import",
      {
        libraryName: "lodash",
        libraryDirectory: "",
        camel2DashComponentName: false
      },
      "lodash"
    ],
    [
      "transform-define",
      {
        "process.env.NODE_ENV": process.env.NODE_ENV,
        "process.env.FAST_MOCK_BASE_URL": process.env.FAST_MOCK_BASE_URL
      }
    ]
  ]
};
