const express = require('express');
const { registerStudent, registerTeacher, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register/student', registerStudent);
router.post('/register/teacher', registerTeacher);
router.post('/login', login);

module.exports = router;
