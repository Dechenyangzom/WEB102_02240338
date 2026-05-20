# Practical 4 - PostgreSQL Video Social Backend

This repository contains the backend for Practical 4, a PostgreSQL-based social video application API built with Node.js, Express, and Prisma.

## Project Overview

The backend implements a social media-style service with:
- PostgreSQL database access using Prisma ORM
- User registration, login, and JWT authentication
- User profile creation and avatar upload support
- Follow/unfollow relationships between users
- Video, comment, like, and follow data models
- Cursor-based pagination for video and comment queries
- Request logging and CORS support

> Note: The current workspace includes `server/src/app.js`, `server/src/controllers/*`, and `server/src/routes/users.js`. The route files for `/api/videos` and `/api/comments` are referenced by `app.js` but are not present in the workspace.

## Technologies

- Node.js
- Express
- PostgreSQL
- Prisma
- bcrypt
- jsonwebtoken
- dotenv
- morgan
- cors

## Project Structure

- `server/src/app.js` - main Express app configuration
- `server/src/index.js` - application entrypoint
- `server/src/routes/users.js` - user-related routes
- `server/src/controllers/` - business logic for users, videos, and comments
- `server/src/middleware/auth.js` - JWT authentication middleware
- `server/prisma/schema.prisma` - Prisma schema for PostgreSQL models
- `server/prisma/seed.js` - database seeding script
- `server/src/lib/prisma.js` - Prisma client initialization

## Setup Instructions

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file in `server/` with these variables:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   JWT_SECRET=your_jwt_secret
   PORT=8000
   NODE_ENV=development
   ```

3. Run Prisma migrations and generate the client. If you have a migration workflow, run:
   ```bash
   npx prisma generate
   ```

4. Seed the database (optional):
   ```bash
   npm run seed
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

6. The API should be available at:
   ```
   http://localhost:8000
   ```

## Available Endpoints

### User Routes
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user details by ID
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Authenticate and obtain a JWT
- `DELETE /api/users/:id` - Delete a user (protected)
- `PUT /api/users/:id` - Update user profile and avatar (protected)
- `GET /api/users/:id/videos` - Get videos by a specific user
- `GET /api/users/:id/followers` - Get followers of a user
- `GET /api/users/:id/following` - Get users followed by a user
- `POST /api/users/:id/follow` - Follow a user (protected)
- `DELETE /api/users/:id/follow` - Unfollow a user (protected)

### Notes
- Protected endpoints require an `Authorization: Bearer <token>` header.
- Uploaded avatars are served from `server/src/uploads`.
- Pagination is implemented in controllers for videos and comments.

## Running Notes

- Ensure `DATABASE_URL` points at a live PostgreSQL instance.
- The schema uses auto-incrementing IDs, relational joins, and cascading deletes.
- `server/src/app.js` creates the uploads directory automatically if it is missing.

## Further Improvements

- Add missing route modules for `/api/videos` and `/api/comments`
- Create frontend integration or API documentation via Swagger
- Add validation middleware for request bodies
- Harden security for file uploads and authorization checks
- Add automated tests for controllers and routes
