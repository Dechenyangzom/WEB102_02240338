# Practical 1 - Social Media API

This project is a simple Express.js REST API for a social media-style application. It provides endpoints for users, posts, comments, likes, and follower relationships using in-memory mock data.

## Features

- User management: create, read, update, delete users
- Post management: create, read, update, delete posts
- Comment management: create, read, update, delete comments
- Likes: list likes, add like, remove like
- Followers: list follow relationships, follow, unfollow
- Pagination support for list endpoints
- Simulated authorization via `X-User-Id` request header for write operations
- API documentation available via `public/docs.html`

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm (included with Node.js)

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```

Or, for development with auto-reload:

```bash
npm run dev
```

### Default server

The API starts on port `3000` by default. Visit:

- `http://localhost:3000/` to open the static documentation page
- `http://localhost:3000/api/users` for the users endpoint

## API Endpoints

### Users

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

### Posts

- `GET /api/posts`
- `GET /api/posts/:id`
- `POST /api/posts`
- `PUT /api/posts/:id`
- `DELETE /api/posts/:id`

### Comments

- `GET /api/comments`
- `GET /api/comments/:id`
- `POST /api/comments`
- `PUT /api/comments/:id`
- `DELETE /api/comments/:id`

### Likes

- `GET /api/likes`
- `GET /api/likes/:id`
- `POST /api/likes`
- `DELETE /api/likes/:id`

### Followers

- `GET /api/followers`
- `GET /api/followers/:id`
- `POST /api/followers`
- `DELETE /api/followers/:id`

## Request Notes

- `POST`, `PUT`, and `DELETE` actions require the `X-User-Id` header to simulate user authorization.
- Example header:

```http
X-User-Id: 1
```

- List endpoints support pagination using query parameters:

```http
?page=1&limit=10
```

## Data Model

The API uses mock data stored in `utils/mockData.js` for:

- Users
- Posts
- Comments
- Likes
- Followers

## Project Structure

- `server.js` - application entry point and middleware setup
- `routes/` - route definitions for each resource
- `controllers/` - request handlers and business logic
- `middleware/` - custom middleware for formatting responses and error handling
- `utils/` - mock data and error helper
- `public/docs.html` - static documentation page

## Notes

This API is designed for learning and demonstration. It is not backed by a database; all data lives in memory and resets when the server restarts.
