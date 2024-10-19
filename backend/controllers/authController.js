const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

exports.registerStudent = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ fname, lname, email, password: hashedPassword });
    await student.save();
    res.json({ msg: 'Student registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.registerTeacher = async (req, res) => {
  const { tname, email, password, subject } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const teacher = new Teacher({ tname, email, subject, password: hashedPassword });
    await teacher.save();
    res.json({ msg: 'Teacher registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Student.findOne({ email });
    if (!user) user = await Teacher.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
