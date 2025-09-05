const express = require('express'); 
const router = express.Router();
const BarSchoolDetail = require('../models/BarSchoolDetail'); // <-- use new schema

// GET all bar school lessons
router.get('/', async (req, res) => {
    try {
        const lessons = await BarSchoolDetail.find();
        res.json(lessons);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET a single bar school lesson by custom id/slug
router.get('/:id', async (req, res) => {
    try {
        const lesson = await BarSchoolDetail.findOne({ id: req.params.id });
        if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
        res.json(lesson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
