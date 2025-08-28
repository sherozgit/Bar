// routes/api/recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');


// GET all recipes (with optional category filter)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query; // get category from query string

    let filter = {};
    if (category) {
      filter.category = category; // filter recipes by category if provided
    }

    const recipes = await Recipe.find(filter);
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET a single recipe by custom id/slug
router.get('/:id', async (req, res) => {
  try {
    // Use your "id" field from MongoDB
    const recipe = await Recipe.findOne({ id: req.params.id });
    if (!recipe) {
      return res.status(404).json({ error: 'Cocktail not found' });
    }
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
