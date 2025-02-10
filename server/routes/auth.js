const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({ username, email, password });
  await user.save();

  const token = jwt.sign({ id: user._id }, 'secret_key');
  res.json({ token });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).send('User not found');

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).send('Invalid password');

  const token = jwt.sign({ id: user._id }, 'secret_key');
  res.json({ token });
});

module.exports = router;
