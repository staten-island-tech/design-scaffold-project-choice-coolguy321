module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style");
  eleventyConfig.addPassthroughCopy("./src/md");
  eleventyConfig.addPassthroughCopy("./src/media");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/public");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
