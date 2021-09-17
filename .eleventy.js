module.exports = (config) => {
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["liquid", "jpg", "md", "css"],
  };
};
