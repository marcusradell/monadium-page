const yaml = require("js-yaml");

module.exports = (config) => {
  config.addDataExtension("yaml", (contents) => yaml.load(contents));

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["njk", "jpg", "md", "css"],
  };
};
