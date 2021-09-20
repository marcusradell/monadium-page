module.exports = (config) => {
  config.addCollection("profilesData", function (collectionApi) {
    const result = collectionApi.getFilteredByGlob("_data/profiles/*.js");
    console.log({ result });
    return result;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["njk", "jpg", "md", "css"],
  };
};
