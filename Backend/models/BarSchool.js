const mongoose = require('mongoose');

const barSchoolSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  image: { type: String },
  url: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('BarSchool', barSchoolSchema);
