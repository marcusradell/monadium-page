module.exports = {
  eleventyComputed: {
    title: (data) => data.name,
    profileImageUrl: (data) =>
      data.page.filePathStem.split("/index")[0] + "/profile.jpg",
    teamIds: (data) => {
      if (data.gigs === undefined) {
        return;
      }

      const result = Array(...new Set(data.gigs.map((g) => g.teamId)));

      return result;
    },
    gigTags: (data) => {
      if (data.gigs === undefined) {
        return;
      }

      const result = data.gigs
        .flatMap((g) => g.tags.map((t) => [t, g.duration, g.start]))
        .reduce((acc, [tag, duration, start]) => {
          if (!acc[tag]) {
            acc[tag] = 0;
          }

          if (duration === "ONGOING") {
            let diff = Date.now() - new Date(start);
            let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
            acc[tag] += diffDays;
          } else {
            acc[tag] += duration * 31;
          }

          acc[tag] = Math.ceil(acc[tag] / 365);

          return acc;
        }, {});

      return result;
    },
  },
};
