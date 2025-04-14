export default {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 17.6,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
}
