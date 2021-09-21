module.exports = (eleventyConfig) => {
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["njk", "jpg", "md", "css"],
  };
};
