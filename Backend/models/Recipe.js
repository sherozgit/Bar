const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  id: String,
  name: String,
  category: String,
  subcategory: String,
  image: String,
  description: String,
  ingredients: [String],
  instructions: [String],
  occasions: [String],
  flavorProfiles: [String],
});

module.exports = mongoose.model('Recipe', recipeSchema);
