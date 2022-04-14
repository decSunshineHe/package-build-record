module.exports = {
  plugins: [
    require("postcss-cssnext")({
      browsers: ["> 0.25%", "last 2 versions"],
    }),
  ],
};
