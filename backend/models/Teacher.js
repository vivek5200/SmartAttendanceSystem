const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  tname: String,
  email: { type: String, unique: true },
  password: String,
  subject: String,
  role: { type: String, default: 'teacher' },
});

module.exports = mongoose.model('Teacher', TeacherSchema);
