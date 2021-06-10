db.movies.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  {
    $push: {
      cast: {
        $set: { "cast.$.character": "Marv" },
      },
    },
  }
);
