require('dotenv').config();
const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

const classicCocktails = require('../data/classicCocktails.json');
const signatureCocktails = require('../data/signatureCocktails.json');

const data = [...classicCocktails, ...signatureCocktails];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,  // ⚡ always include these for Atlas
})
  .then(async () => {
    console.log('✅ Connected to MongoDB Atlas, seeding data...');

    // Clear existing recipes
    await Recipe.deleteMany();

    // Insert new recipes
    await Recipe.insertMany(data);

    console.log(`✅ Seeding completed. Inserted ${data.length} recipes`);
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error connecting to MongoDB', err);
    process.exit(1);
  });
