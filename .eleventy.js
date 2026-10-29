module.exports = function(eleventyConfig) {
  // Pass these folders through to the final build untouched
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images"); 

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
