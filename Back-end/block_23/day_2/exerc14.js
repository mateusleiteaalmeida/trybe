db.superheroes.find({
  $or: [{
      "aspects.height": "180"
  }, {
      "aspects.height": "200"
  }, {
      publisher: "Marvel Comics"
  }]
});