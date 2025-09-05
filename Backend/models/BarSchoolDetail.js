const mongoose = require('mongoose');

const FactSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true }
});

const CocktailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String } // optional
});

const SectionSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Brandy"
  description: { type: String },
  facts: [FactSchema],
  cocktails: [CocktailSchema],
  image: { type: String } // optional
});

const barSchoolDetailSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // lesson id
  title: { type: String, required: true },
  subtitle: { type: String },
  image: { type: String }, // cover image
  url: { type: String },
  description: { type: String }, // intro text
  sections: [SectionSchema] // detailed sections for this lesson
}, { timestamps: true });

module.exports = mongoose.model('BarSchoolDetail', barSchoolDetailSchema);
