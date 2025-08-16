const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
const classicCocktails = require('../data/classicCocktails.json');
const signatureCocktails = require('../data/signatureCocktails.json');
 
const data = [...classicCocktails, ...signatureCocktails];

mongoose.connect('mongodb://localhost:27017/bartenderApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB, seeding data...');

  // Clear existing recipes
  await Recipe.deleteMany();

  // Insert new recipes
  await Recipe.insertMany(data);

  console.log('Seeding completed.');
  process.exit();
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1);
});
