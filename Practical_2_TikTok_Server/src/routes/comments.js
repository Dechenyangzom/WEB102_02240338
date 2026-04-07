const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET /api/comments - Get all comments
router.get('/', commentController.getAllComments);

// POST /api/comments - Create a new comment
router.post('/', commentController.createComment);

// GET /api/comments/:id - Get comment by ID
router.get('/:id', commentController.getCommentById);

// PUT /api/comments/:id - Update a comment
router.put('/:id', commentController.updateComment);

// DELETE /api/comments/:id - Delete a comment
router.delete('/:id', commentController.deleteComment);

// POST /api/comments/:id/likes - Like a comment
router.post('/:id/likes', commentController.likeComment);

// DELETE /api/comments/:id/likes - Unlike a comment
router.delete('/:id/likes', commentController.unlikeComment);

module.exports = router;