db.superheroes.count({
  "aspects.hairColor": { $not: { $in: ["Black", "No Hair"] }}
});