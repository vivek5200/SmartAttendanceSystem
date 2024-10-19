const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  performance_score: { type: Number, default: 0 },
  role: { type: String, default: 'student' },
});

module.exports = mongoose.model('Student', StudentSchema);
