const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET a single recipe by ID (must come first)
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ id: req.params.id });  // <-- use findOne with id
    if (!recipe) {
      return res.status(404).json({ error: 'Cocktail not found' });
    }
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});



// GET all recipes or filter by category
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    const recipes = await Recipe.find(filter);
    res.json(recipes);
  } catch (err) {
    console.error('Error fetching recipes:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new recipe
router.post('/', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    console.error('Error saving recipe:', err);
    res.status(400).json({ error: 'Invalid recipe data' });
  }
});

module.exports = router;
