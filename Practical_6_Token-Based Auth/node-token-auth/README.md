# Token-Based Authentication Demo

A simple Node.js and Express application demonstrating token-based authentication using JWTs.

This practical project includes:
- User registration with bcrypt password hashing
- Login route that issues a JSON Web Token (JWT)
- Protected route accessible only with a valid token
- Public users endpoint that returns registered users without revealing passwords

## Tech stack
- Node.js
- Express
- bcryptjs
- jsonwebtoken
- dotenv

## Setup
1. Open a terminal in `node-token-auth`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `node-token-auth`:
   ```env
   JWT_SECRET=your_secret_key_here
   PORT=3000
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Open the application at:
   ```
   http://localhost:3000
   ```

## Endpoints

### `POST /auth/register`
Register a new user.

Request body:
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "name": "Jane Doe"
}
```

Response:
- `201 Created` on success
- `409 Conflict` if the email already exists

### `POST /auth/login`
Login with email and password to receive a JWT.

Request body:
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

Response:
```json
{
  "message": "Login successful!",
  "token": "<jwt_token>"
}
```

### `GET /profile`
Protected route. Requires the JWT in the `Authorization` header.

Header:
```
Authorization: Bearer <jwt_token>
```

Response body includes the decoded token payload under `user`.

### `GET /users`
Public endpoint that returns the registered users.

Response:
```json
[
  {
    "id": 1,
    "email": "user@example.com",
    "name": "Jane Doe"
  }
]
```

## Middleware behavior
- `middleware/verifyToken.js` checks for `Authorization: Bearer <token>`.
- If the token is missing, the server returns `401 Unauthorized`.
- If the token is invalid or expired, the server returns `403 Forbidden`.
- Valid tokens attach `req.user` and allow access to protected routes.

## Notes
- This project uses an in-memory `users` array and is not suitable for production.
- Passwords are hashed with `bcryptjs` before storage.
- JWTs are signed with `process.env.JWT_SECRET` and expire after 1 day.

## Available scripts
- `npm test` currently prints an error placeholder and exits.

## Project structure
- `server.js` – main Express server setup
- `routes/auth.js` – registration and login routes
- `routes/protected.js` – protected profile route
- `routes/users.js` – public users listing route
- `middleware/verifyToken.js` – JWT verification middleware

## License
ISC
