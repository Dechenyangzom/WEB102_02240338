# Practical 2 - TikTok Server

## Overview
This project is a basic RESTful TikTok-style API built with Node.js and Express. It provides endpoints for managing users, videos, comments, likes, and follow relationships using an in-memory datastore.

## Features
- Create, read, update, and delete users, videos, and comments
- Like/unlike videos and comments
- Follow/unfollow users
- Fetch user-specific videos and followers
- Fetch comments for a given video
- JSON API with built-in error handling and request validation

## Tech Stack
- Node.js
- Express
- body-parser
- CORS
- morgan
- dotenv

## Installation
1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

## Run the Application
- Start the server in development mode with automatic reloads:

```bash
npm run dev
```

- Start the server normally:

```bash
npm start
```

The server listens on port `3000` by default. You can change the port by setting the `PORT` environment variable.

## API Endpoints

### Root
- `GET /` - Welcome message

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
  - Required: `username`, `email`
  - Optional: `name`
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user details
- `DELETE /api/users/:id` - Delete a user
- `GET /api/users/:id/videos` - Get videos uploaded by a user
- `GET /api/users/:id/followers` - Get followers of a user
- `POST /api/users/:id/follow` - Follow a user
  - Required: `followerId`
- `DELETE /api/users/:id/follow` - Unfollow a user
  - Required: `followerId`

### Videos
- `GET /api/videos` - Get all videos
- `POST /api/videos` - Create a new video
  - Required: `title`, `url`, `userId`
  - Optional: `description`
- `GET /api/videos/:id` - Get video by ID
- `PUT /api/videos/:id` - Update a video
- `DELETE /api/videos/:id` - Delete a video
- `GET /api/videos/:id/comments` - Get comments for a video
- `GET /api/videos/:id/likes` - Get users who liked a video
- `POST /api/videos/:id/likes` - Like a video
  - Required: `userId`
- `DELETE /api/videos/:id/likes` - Unlike a video
  - Required: `userId`

### Comments
- `GET /api/comments` - Get all comments
- `POST /api/comments` - Create a new comment
  - Required: `text`, `userId`, `videoId`
- `GET /api/comments/:id` - Get comment by ID
- `PUT /api/comments/:id` - Update a comment
- `DELETE /api/comments/:id` - Delete a comment
- `POST /api/comments/:id/likes` - Like a comment
  - Required: `userId`
- `DELETE /api/comments/:id/likes` - Unlike a comment
  - Required: `userId`

## Data Storage
This project uses an in-memory datastore defined in `src/models/index.js`. Sample users, videos, and comments are preloaded when the server starts. Data is not persisted between restarts.

## Notes
- The API currently expects JSON requests and returns JSON responses.
- Basic validation and error responses are implemented in the controllers.
- There is no database integration in this version.
