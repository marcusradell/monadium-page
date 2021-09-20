module.exports = {
  eleventyComputed: {
    title: (data) => data.name,
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
            acc[tag] += duration;
          }

          return acc;
        }, {});

      return result;
    },
  },
};
