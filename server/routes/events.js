const express = require('express');
const Event = require('../models/Event');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
  const events = await Event.find().populate('user');
  res.json(events);
});

router.post('/', authMiddleware, async (req, res) => {
  const { name, description, dateTime } = req.body;
  const event = new Event({ name, description, dateTime, user: req.user.id });
  await event.save();
  res.json(event);
});

module.exports = router;
