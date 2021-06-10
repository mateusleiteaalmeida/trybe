db.superheroes.find({
  hairColor: {
      $exists: true
  }
});