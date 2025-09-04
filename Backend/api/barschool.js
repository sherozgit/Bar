const express = require('express'); 
const router = express.Router();
const BarSchool = require('../models/BarSchool');

// GET all bar school entries
router.get('/', async (req, res) => {
    try {
        const barSchools = await BarSchool.find();
        res.json(barSchools);

    } catch(err){
        console.error(err);
        res.status(500).json({ error:'Server error'});

    }
});

// GET a single bar school entry by custom id/slug
router.get('/:id', async(req,res) => {
    try{
        const barSchools = await BarSchool.findOne({ id: req.params.id});
        if(!barSchools) return res.status(404).json({ error: 'Lesson not found'});
        res.json(barSchools);

    } catch(err){
        console.error(err);
        res.status(500).json({ error: 'Server error'})
    }

});

module.exports = router;