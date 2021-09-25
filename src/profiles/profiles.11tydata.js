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
    experiences: (data) => {
      if (data.gigs === undefined) {
        return;
      }

      const exactDurations = data.gigs
        .flatMap((g) => g.tags?.map((t) => [t, g.duration, g.start]) ?? [])
        .reduce((acc, [tag, duration, start]) => {
          if (!acc[tag]) {
            acc[tag] = { totalYears: 0, start };
          }

          let durationDays = 0;

          if (duration === "ONGOING") {
            let diff = Date.now() - new Date(start);
            durationDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
          } else {
            durationDays = duration * 31;
          }

          acc[tag].totalYears += durationDays / 365;

          return acc;
        }, {});

      const result = Object.entries(exactDurations)
        .map(([tag, { totalYears, start }]) => ({
          tag,
          start,
          totalYears: Math.floor(totalYears),
        }))
        .sort((a, b) => {
          const favA = data.favorites.includes(a);
          const favB = data.favorites.includes(b);
          if (favA && favB) return 0;
          if (favA) return -1;
          return 1;
        })
        .sort((a, b) => new Date(b.totalYears) - new Date(a.totalYears));

      return result;
    },

    experienceStart: (data) => {
      const gigs = [...data.gigs];
      const start = gigs.sort((g) => g.start).reverse()[0].start;

      const diff = Date.now() - new Date(start);
      const durationDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      const result = Math.floor(durationDays / 365);

      return result;
    },
  },
};
