module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style");
  eleventyConfig.addPassthroughCopy("./src/md");
  eleventyConfig.addPassthroughCopy("./src/media");
  eleventyConfig.addPassthroughCopy("./src/js")
    return {
      dir: {
        input: "src",
        output: "dist",
    },
  };
};