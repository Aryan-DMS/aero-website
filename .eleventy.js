const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Pass these folders through to the final build untouched
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images"); 

  // Add Markdown translation filter
  const md = new markdownIt({ html: true, breaks: true });
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content || "");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
