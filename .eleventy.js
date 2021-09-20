module.exports = (config) => {
  config.addCollection("profilesColl", function (collectionApi) {
    const result = collectionApi.getFilteredByTag("profile");
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
