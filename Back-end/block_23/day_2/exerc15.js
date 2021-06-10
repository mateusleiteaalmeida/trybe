db.superheroes.find({
  $or: [{
      "aspects.weight": {
          $gte: 80
      }
  }, {
      "aspects.height": {
          $lte: 100
      }
  }, {
      $or: [{
          race: "Human"
      }, {
          race: "Mutant"
      }]
  }, {
      publisher: {
          $ne: "DC Comics"
      }
  }]
});