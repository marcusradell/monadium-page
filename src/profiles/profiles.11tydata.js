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
    experience: (data) => {
      if (data.gigs === undefined) {
        return;
      }

      let js = 0;

      const exactDurations = data.gigs
        .flatMap((g) => g.tags.map((t) => [t, g.duration, g.start]))
        .reduce((acc, [tag, duration, start]) => {
          if (!acc[tag]) {
            acc[tag] = 0;
          }

          let durationDays = 0;

          if (duration === "ONGOING") {
            let diff = Date.now() - new Date(start);
            durationDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
          } else {
            durationDays = duration * 31;
          }

          acc[tag] += durationDays / 365;

          return acc;
        }, {});

      const result = Object.fromEntries(
        Object.entries(exactDurations).map(([_, duration]) => [
          _,
          Math.floor(duration),
        ])
      );

      return result;
    },

    experienceStart: (data) => {
      const start = data.gigs.sort((g) => g.start).reverse()[0].start;

      const diff = Date.now() - new Date(start);
      const durationDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      const result = Math.floor(durationDays / 365);

      return result;
    },
  },
};
