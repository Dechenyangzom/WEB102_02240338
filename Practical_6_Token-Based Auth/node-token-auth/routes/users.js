const express = require('express');
// Import the shared users array from auth.js
const { users } = require('./auth');
 
const router = express.Router();
 
// GET /users — returns list of all registered users (no token needed)
// Only returns id, email, and name — NEVER the password
router.get('/users', (req, res) => {
  const safeUsers = users.map(({ id, email, name }) => ({ id, email, name }));
  res.json(safeUsers);
});
 
module.exports = router;
 