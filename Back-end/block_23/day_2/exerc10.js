db.superheroes.count({
  "aspects.hairColor": { $in: ["Black", "No Hair"] }
});