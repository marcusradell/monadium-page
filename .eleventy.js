module.exports = (config) => {
  // config.addCollection("profiles", function (collectionApi) {
  //   const result = collectionApi.getFilteredByTag("profile");
  //   return result;
  // });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["njk", "jpg", "md", "css"],
  };
};
