const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// GET /api/users - Get all users
router.get('/', userController.getAllUsers);

// POST /api/users - Create a new user
router.post('/', userController.createUser);

// GET /api/users/:id - Get user by ID
router.get('/:id', userController.getUserById);

// PUT /api/users/:id - Update a user
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id - Delete a user
router.delete('/:id', userController.deleteUser);

// GET /api/users/:id/videos - Get user videos
router.get('/:id/videos', userController.getUserVideos);

// GET /api/users/:id/followers - Get followers
router.get('/:id/followers', userController.getUserFollowers);

// POST /api/users/:id/follow - follow user
router.post('/:id/follow', userController.followUser);

// DELETE /api/users/:id/follow - unfollow user
router.delete('/:id/follow', userController.unfollowUser);

module.exports = router;
